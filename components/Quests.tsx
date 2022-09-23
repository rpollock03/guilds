import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateQuests } from "../storage/quest"
import Link from "next/link"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      <button onClick={() => populateQuests(firestore)}>
        populate quests if not populated
      </button>
      <Link href="/addQuest">
        <button>Add Quest</button>
      </Link>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(16rem, 1fr))"} gap={"7rem"}>
              {quests?.length ? (
                quests.map((quest, idx) => (
                  <div key={idx}>
                    <div>{quest?.title}</div>
                    <div>{quest?.description}</div>
                    <div>{quest?.reward}</div>
                    <div>{quest?.tags}</div>
                    <Link
                      href={{
                        pathname: "/quest",
                        query: { questId: quest.questId },
                      }}
                    >
                      <button>see quest</button>
                    </Link>
                  </div>
                ))
              ) : (
                <div style={{ margin: "auto" }}>no quests</div>
              )}
            </Grid>
          )}
        </>
      )}
    </>
  )
}
