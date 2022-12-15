import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { SideNav } from "../components/SideNav"
import { useAuth, useUser } from "reactfire"

export default function Home() {
  const { data: user } = useUser()
  const auth = useAuth()

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
    </Box>
  )
}
