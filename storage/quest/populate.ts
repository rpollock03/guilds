import {
  Firestore,
  collection,
  getDocs,
  addDoc,
  QueryDocumentSnapshot,
  DocumentData,
  doc,
  setDoc,
} from "firebase/firestore"
import { Quest, Bid, Tag } from "../../storage/quest"
import { faker } from "@faker-js/faker"

export const populateQuests = async (firestore: Firestore) => {
  const promises = []
  for (let i = 0; i < 3; i++) {
    const questRef = doc(collection(firestore, "quests"))
    const questId = questRef.id
    const quest: Quest = {
      id: questId,
      image: faker.image.imageUrl(),
      reward: faker.datatype.number({ min: 1, max: 1000 }),
      title: faker.lorem.sentence(5),
      description: faker.lorem.sentences(5),
      tags: [Object.values(Tag)[faker.datatype.number(6)]],
    }
    promises.push(setDoc(questRef, quest))
    const results = await Promise.all(promises)
  }
}

export const populateBids = async (firestore: Firestore) => {
  const questsRef = collection(firestore, `quests`)
  const quests = await getDocs(questsRef)
  const promises = []
  quests.docs.forEach((quest: QueryDocumentSnapshot<DocumentData>) => {
    for (let i = 0; i < 3; i++) {
      const bidRef = doc(collection(firestore, `quests/${quest.id}/bids`))
      const bidId = bidRef.id
      const bid: Bid = {
        bidId: bidId,
        questId: quest.id,
        userId: faker.datatype.uuid(),
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
        createdAt: faker.date.past(),
      }
      promises.push(setDoc(bidRef, bid))
    }
  })
  const results = await Promise.all(promises)
}
