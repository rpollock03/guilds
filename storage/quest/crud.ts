import {
  Firestore,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore"
import { Quest, Tag } from "./types"
import { faker } from "@faker-js/faker"

const writeQuest = async (firestore: Firestore, quest: Quest) => {
  const questColRef = collection(firestore, `quests`)
  const questRef = doc(firestore, `quests/${quest.id}`)
  const questSnap = await getDoc(questRef)
  if (questSnap.exists()) {
    await addDoc(questColRef, quest)
  }
}

const readQuest = (firestore: Firestore, reactfire: any, questId: string) => {
  const questRef = doc(firestore, `quests/${questId}`)
  const { data: questDoc } = reactfire.getDoc(questRef)
  return questDoc
}

const readQuests = async (firestore: Firestore, getCol: any) => {
  const questRef = collection(firestore, `quests`)
  const { data } = getCol(questRef)
  return data.docs
}

export { writeQuest, readQuest, readQuests }
