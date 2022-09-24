import Head from "next/head"

import Header from "../components/Header"

import { Footer } from "../components/Footer"
import { GuildsIntro } from "components/GuildsIntro"
import { Container, Box } from "@mui/material"
import { Router } from "../components/Router"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilds</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Get working" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Header />
          <GuildsIntro />
          <Router />
        </Container>
        <Footer />
      </Box>
    </div>
  )
}
