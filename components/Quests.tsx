import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateQuests } from "../storage/quest"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      <button
        onClick={() => populateQuests(firestore)}
        style={{ color: "black" }}
      >
        populate quests if not populated
      </button>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(210px, 1fr))"} gap={"83px"}>
              {quests?.length ? (
                quests.map((quest, idx) => (
                  <div key={idx}>
                    <div>{quest?.title}</div>
                    <div>{quest?.description}</div>
                    <div>{quest?.reward}</div>
                    <div>{quest?.tags}</div>
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
