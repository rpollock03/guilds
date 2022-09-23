import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateBids, populateQuests } from "../storage/quest"
import Link from "next/link"
import Bids from "./Bids"
import { Tag } from "./Tag"
import { Quest } from "storage/quest"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)
  const questsData = quests as Quest[]

  return (
    <>
      <button onClick={() => populateQuests(firestore)}>
        populate quests if not populated
      </button>
      <button onClick={() => populateBids(firestore)}>
        populate bids if not populated
      </button>
      <Link href="/add-quest">
        <button>Add Quest</button>
      </Link>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(16rem, 1fr))"} gap={"7rem"}>
              {questsData?.length ? (
                questsData.map((quest, idx) => (
                  <div key={idx}>
                    <div>Title: {quest?.title}</div>
                    <div>Description: {quest?.description}</div>
                    <div>Reward: {quest?.reward}</div>
                    <div>Tags:</div>
                    {quest?.tags.map((tag, idx) => (
                      <Tag key={idx} value={tag}></Tag>
                    ))}
                    <Bids path={`quests/${quest.id}/bids`} />
                    <Link
                      href={{
                        pathname: "/quest",
                        query: { questId: quest.id },
                      }}
                    >
                      <button>see quest</button>
                    </Link>
                  </div>
                ))
              ) : (
                <div>no quests</div>
              )}
            </Grid>
          )}
        </>
      )}
    </>
  )
}
