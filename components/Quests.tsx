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
import QuestHit from "components/QuestHit"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <SearchBox />
      <RefinementList attribute="tags" />
      <button onClick={() => populateQuests(firestore)}>
        populate quests if not populated
      </button>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(15rem, 1fr))"} gap={"7rem"}>
              <Hits hitComponent={QuestHit} />
            </Grid>
          )}
        </>
      )}
    </InstantSearch>
  )
}
