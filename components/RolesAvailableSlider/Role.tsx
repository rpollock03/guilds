import styled from "styled-components"
import { Grid, Box, Stack, Typography, Button } from "@mui/material"
import LinesElipsis from "react-lines-ellipsis"
import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import {
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
} from "firebase/firestore"

const RoleThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 296,
  width: 280,
})

interface RoleProps {
  role: DocumentData
  teamId: string | string[]
}

export function Role({ role, teamId }: RoleProps) {
  const { title, description, thumbnail, id: roleId } = role
  const firestore = useFirestore()
  const bidsRef = collection(firestore, `teams/${teamId}/roles/${roleId}/bids`)
  const lowestBidQuery = query(bidsRef, orderBy("amount", "asc"), limit(1))
  const { data: lowestBid } = useFirestoreCollectionData(lowestBidQuery)
  console.log(lowestBid)

  const makeBid = () => {
    console.log("make bid")
  }

  return (
    <Grid item xs={6} width="280px">
      <Box>
        <Stack spacing={1}>
          <RoleThumbnail storagePath={`teams/roles/role.jpeg`} />
          {lowestBid && (
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              {"Lowest bid - £" + lowestBid[0]?.amount}
            </Typography>
          )}
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{title}</Typography>
          </Stack>
          <Typography variant="body1">
            <LinesElipsis
              text={description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Typography>
          <Button onClick={() => makeBid()} variant="outlined">
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Make a bid
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Grid>
  )
}
