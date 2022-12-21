import { Header } from "../components/Header"
import { Container, Box } from "@mui/material"
import { SideNav } from "../components/SideNav"
import { useAuth, useUser } from "reactfire"
import { Footer } from "../components/Footer"


export default function Home() {
  const { data: user } = useUser()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {user?.uid ? <SideNav /> : <Header />}
      <Container></Container>
      <Footer />
    </Box>
  )
}
