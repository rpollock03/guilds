import Image from "next/image"
import { Divider, Stack, Typography } from "@mui/material"
import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { Container } from "@mui/system"

export function index() {
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const { data: heroes } = useFirestoreCollectionData(heroesRef)
  const questsRef = collection(firestore, "quests")
  const closedQuestsQuery = query(questsRef, where("status", "==", "closed"))
  const { data: closedQuests } = useFirestoreCollectionData(closedQuestsQuery)
  const totalEarned = closedQuests
    .map((quest) => quest.reward)
    .reduce((a, b) => a + b, 0)

  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      spacing={7}
      width="100%"
    >
      <Stack alignItems="center" spacing={2}>
        <Image src="/GuildsLogo.svg" width={56} height={56} />
        <Typography variant="h4">Guilds history</Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          We've made quite the statement
        </Typography>
      </Stack>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="space-around" width="100%">
          <Stack spacing={1} alignItems="center" width="calc(100%/3)">
            <Typography
              fontWeight={600}
              variant="h3"
              sx={{ color: "primary.main" }}
            >
              {heroes?.length.toLocaleString()}
            </Typography>
            <Typography textAlign="center" variant="body1">
              Heroes
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack spacing={1} alignItems="center" width="calc(100%/3)">
            <Typography
              fontWeight={600}
              variant="h3"
              sx={{ color: "primary.main" }}
            >
              £{totalEarned.toLocaleString()}
            </Typography>
            <Typography textAlign="center" variant="body1">
              Earned by Heroes
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack spacing={1} alignItems="center" width="calc(100%/3)">
            <Typography
              fontWeight={600}
              variant="h3"
              sx={{ color: "primary.main" }}
            >
              {closedQuests?.length.toLocaleString()}
            </Typography>
            <Typography textAlign="center" variant="body1">
              Quests completed
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
