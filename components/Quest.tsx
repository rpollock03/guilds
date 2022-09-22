import { useFirestore, useFirestoreDocData } from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import styled from "styled-components"
import Link from "next/link"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

export default function Quest(): JSX.Element {
  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()
  const questRef = doc(firestore, `quests/${questId}`)
  const { status: questStatus, data: quest } = useFirestoreDocData(questRef)

  return (
    <div>
      {questStatus === "loading" ? (
        <div>loading</div>
      ) : (
        <div>
          <Title>Quest: {quest?.title}</Title>
          <div>{quest?.description}</div>
          <div>{quest?.reward}</div>
          <div>{quest?.tags}</div>
          <Link
            href={{
              pathname: "/addBid",
              query: { questId: quest.questId },
            }}
          >
            <button>add bid</button>
          </Link>
        </div>
      )}
    </div>
  )
}
