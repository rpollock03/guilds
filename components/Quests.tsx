import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateQuests } from "../storage/quest"
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
} from "react-instantsearch-hooks-web"
import { searchClient } from "../typesense/insantsearch"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  const Hit = ({ hit }) => (
    <div>
      <div>Title: {hit?.title}</div>
      <div>Description: {hit?.description}</div>
      <div>Reward: {hit?.reward}</div>
      <div>Tags:</div>
      {hit?.tags.map((tag) => (
        <div>{tag}</div>
      ))}
    </div>
  )

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <SearchBox />
      <RefinementList attribute="tags" />
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
              <Hits hitComponent={Hit} />
            </Grid>
          )}
        </>
      )}
    </InstantSearch>
  )
}
