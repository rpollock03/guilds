import Head from "next/head"

import Header from "../components/Header"

import { Footer } from "../components/Footer"
import { GuildsIntro } from "components/GuildsIntro"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilds</title>
        <meta name="description" content="Get working" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GuildsIntro />
      <Footer />
    </div>
  )
}
