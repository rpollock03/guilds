import { useFirestore, useFirestoreDocData } from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import styled from "styled-components"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

export default function QuestPage(): JSX.Element {
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
        </div>
      )}
    </div>
  )
}
