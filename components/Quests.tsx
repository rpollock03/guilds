import QuestHit from "components/QuestHit"
import Link from "next/link"
import { Grid } from "styled-css-grid"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "../storage/quest"
import { SearchBox, Hits, RefinementList } from "react-instantsearch-hooks-web"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <div>
      <SearchBox />
      <RefinementList attribute="tags" />
      <button onClick={() => populateQuests(firestore)}>
        populate quests if not populated
      </button>
      <button onClick={() => populateBids(firestore)}>
        populate bids if not populated
      </button>
      <Link href="/add-quest">
        <button>Add Quest</button>
      </Link>
      <Grid columns={"repeat(auto-fit, minmax(16rem, 1fr))"} gap={"7rem"}>
        <Hits hitComponent={QuestHit} />
      </Grid>
    </div>
  )
}
