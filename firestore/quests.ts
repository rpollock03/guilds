import {
  Firestore,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore"
import { Quest, Bid, Tag } from "storage/quest"
import { faker } from "@faker-js/faker"

const writeQuest = async (firestore: Firestore, quest: Quest) => {
  const questColRef = collection(firestore, `quests`)
  const questRef = doc(firestore, `quests/${quest.id}`)
  const questSnap = await getDoc(questRef)
  if (questSnap.exists()) {
    const writeQuest = await addDoc(questColRef, quest)
  }
}

const readQuest = (firestore: Firestore, reactfire: any, questId: string) => {
  const questRef = doc(firestore, `quests/${questId}`)
  const { data: questDoc } = reactfire.getDoc(questRef)
  return questDoc
}

const readQuests = async (firestore: Firestore, getCol: ) => {
  const questRef = collection(firestore, `quests`)
  const { data: questDocs } = getCol(questRef)
  return questDocs.docs
}

const populateQuests = async (firestore: Firestore) => {
  const questRef = collection(firestore, `quests`)
  const questSnap = await getDocs(questRef)
  if (questSnap.empty) {
    const questsAmount = new Array(50)
    Promise.all(
      questsAmount.map(async () => {
        const tags: Tag[] = Object.values(Tag)
        for (
          let i = 0;
          i < faker.datatype.number({ min: 0, max: tags.length });
          i++
        ) {
          tags.splice(faker.datatype.number({ min: 0, max: tags.length }), 1)
        }
        const quest: Quest = {
          image: faker.image.imageUrl(),
          reward: faker.datatype.number({ min: 1, max: 1000 }),
          title: faker.lorem.sentence(5),
          description: faker.lorem.sentences(5),
          tags: tags,
        }
        await writeQuest(firestore, quest)
      })
    )
  }
}

export { writeQuest, readQuest, readQuests, populateQuests }
