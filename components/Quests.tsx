import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateBids, populateQuests } from "../storage/quest"
import Bids from "../components/Bids"

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
      <button
        onClick={() => populateBids(firestore)}
        style={{ color: "black" }}
      >
        populate bids if not populated
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
                    <div>Title: {quest?.title}</div>
                    <div>Description: {quest?.description}</div>
                    <div>Reward: {quest?.reward}</div>
                    <div>Tags: {quest?.tags[0]}</div>
                    <Bids path={`quests/${quest.questId}/bids`} />
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
