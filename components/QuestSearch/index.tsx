import { QuestHits } from "./QuestHits"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "storage/quest"
import { searchClient } from "typesense/insantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import { QuestRefinementList } from "./QuestRefinementList"
import { Button, Stack, Divider } from "@mui/material"
import { QuestSearchBox } from "./QuestSearchBox"
import { QuestPagination } from "./QuestPagination"

export function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <Stack
        direction="column"
        justifyContent="space-around"
        spacing={4}
        mt="1rem"
      >
        <Stack direction="row" spacing={6}>
          <Stack direction="column" spacing={4}>
            <QuestSearchBox />
            <QuestRefinementList attribute="tags" />
            <Button
              variant="outlined"
              onClick={() => populateQuests(firestore)}
            >
              populate quests
            </Button>
            <Button variant="outlined" onClick={() => populateBids(firestore)}>
              populate bids
            </Button>
          </Stack>
          <QuestHits />
        </Stack>
        <Divider />
        <QuestPagination />
      </Stack>
    </InstantSearch>
  )
}
