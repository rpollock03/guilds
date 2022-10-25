import { Box, Stack, Typography } from "@mui/material"
import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import Image from "next/image"

export function index() {
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const { data: heroes } = useFirestoreCollectionData(heroesRef)
  const questsRef = collection(firestore, "quests")
  const closedQuestsQuery = query(questsRef, where("status", "==", "closed"))
  const { data: closedQuests } = useFirestoreCollectionData(closedQuestsQuery)

  return (
    <Stack alignItems="center" justifyContent="space-around" spacing={2}>
      <Image src="/GuildsLogo.svg" width={56} height={56} />
      <Typography variant="h4">Guilds history</Typography>
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        We've made quite the statement
      </Typography>
      <Stack direction="row" justifyContent="space-around" spacing={2}>
        <Stack alignItems="center">
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            {heroes.length}
          </Typography>
          <Typography variant="h6">Heroes</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h6">Earned by Heroes</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            {closedQuests.length}
          </Typography>
          <Typography variant="h6">Quests completed</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
