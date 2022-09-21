import Head from "next/head"
import styles from "../styles/Home.module.css"

import Header from "../components/Header"
import SignIn from "../components/SignIn"
import { useSigninCheck } from "reactfire"
import Profile from "components/Profile"
import Quests from "components/Quests"
import Heroes from "components/Heroes"
import Messaging from "components/Messaging"

export default function Home() {
  const { status, data: signInCheckResult } = useSigninCheck()
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Next.js</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Guilds</h1>
          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/</code>
            and
            <code className={styles.code}>components/</code>!
          </p>
          <>
            {status === "loading" ? (
              <div>loading...</div>
            ) : signInCheckResult.signedIn === true ? (
              <>
                <Profile />
                <Quests />
                <Heroes />
              </>
            ) : (
              <SignIn />
            )}
          </>
        </main>
      </div>
      <div style={{ display: "block", marginTop: 2500 }}>
        <Messaging />
      </div>
    </>
  )
}
