import Image from "next/image"
import { Divider, Stack, Typography } from "@mui/material"
import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { Container } from "@mui/system"
import { GuildsData } from "./GuildsData"

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
          <GuildsData
            value={heroes?.length.toLocaleString()}
            caption={"Heroes"}
          />
          <Divider orientation="vertical" flexItem />
          <GuildsData
            value={"£" + totalEarned.toLocaleString()}
            caption={"Earned by Heroes"}
          />
          <Divider orientation="vertical" flexItem />
          <GuildsData
            value={closedQuests?.length.toLocaleString()}
            caption={"Quests completed"}
          />
        </Stack>
      </Container>
    </Stack>
  )
}
