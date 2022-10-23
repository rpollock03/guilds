import styled from "styled-components"
import _ from "lodash"
import { connectRefinementList } from "react-instantsearch-dom"
import { Box, ListItemButton, Stack, Typography } from "@mui/material"

interface Item {
  label: string
  value: string
  count: number
  isRefined: boolean
}

const CustomListItemButton = styled(ListItemButton)({
  borderRadius: "0.5rem",
})

function RefinementList({ items, refine, currentRefinement }) {
  const sortedItems = _.orderBy(items, ["label"], ["desc", "asc"])

  return (
    <Stack spacing={1} width={"18rem"}>
      <Typography
        variant="body2"
        sx={{ fontWeight: 600, color: "primary.main" }}
      >
        Quest categories
      </Typography>
      <Box
        sx={{
          bgcolor: !currentRefinement.length
            ? "primary.light"
            : "background.main",
          color: !currentRefinement.length ? "primary.main" : "text.secondary",
          borderRadius: "0.5rem",
        }}
      >
        <CustomListItemButton onClick={() => refine([])}>
          <Typography variant="body1">View all</Typography>
        </CustomListItemButton>
      </Box>
      {sortedItems.length > 0 &&
        sortedItems.map((item: Item, idx) => (
          <Box
            sx={{
              bgcolor: item.isRefined ? "primary.light" : "background.main",
              color: item.isRefined ? "primary.main" : "text.secondary",
              borderRadius: "0.5rem",
            }}
            key={idx}
          >
            <CustomListItemButton onClick={() => refine(item.value)}>
              <Typography variant="body1">{item.label}</Typography>
            </CustomListItemButton>
          </Box>
        ))}
    </Stack>
  )
}

export const QuestRefinementList = connectRefinementList(RefinementList)
