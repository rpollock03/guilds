import Header from "../components/Header"

import { Footer } from "../components/Footer"
import { GuildsIntro } from "components/GuildsIntro"
import { Container, Box } from "@mui/material"
import { Router } from "../components/Router"

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="sm">
        <Header />
        <GuildsIntro />
        <Router />
      </Container>
      <Footer />
    </Box>
  )
}
