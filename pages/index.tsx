import { Header } from "../components/Header"
import { Quests } from "../components/QuestSearch"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { FindQuestBanner } from "components/QuestSearch/FindQuestBanner"

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <FindQuestBanner />
      <Container>
        <Quests />
      </Container>
      <Footer />
    </Box>
  )
}
