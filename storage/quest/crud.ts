import { Firestore, doc, getDoc, addDoc, collection } from "firebase/firestore"
import { Quest } from "./types"

const writeQuest = async (firestore: Firestore, quest: Quest) => {
  const questColRef = collection(firestore, `quests`)
  const questRef = doc(firestore, `quests/${quest.id}`)
  const questSnap = await getDoc(questRef)
  if (questSnap.exists()) {
    await addDoc(questColRef, quest)
  }
}

export { writeQuest }
