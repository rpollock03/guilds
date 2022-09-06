import {
  Firestore,
  collection,
  getDocs,
  addDoc,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore"
import { Quest, Bid } from "../../storage/quest"
import { faker } from "@faker-js/faker"

export const populateQuests = async (firestore: Firestore) => {
  const questRef = collection(firestore, `quests`)
  const promises = []
  for (let i = 0; i < 3; i++) {
    const quest: Quest = {
      image: faker.image.imageUrl(),
      reward: faker.datatype.number({ min: 1, max: 1000 }),
      title: faker.lorem.sentence(5),
      description: faker.lorem.sentences(5),
      tags: [],
    }
    promises.push(addDoc(questRef, quest))
    const results = await Promise.all(promises)
    console.log(results[0])
  }
}

export const populateBids = async (firestore: Firestore) => {
  const questsRef = collection(firestore, `quests`)
  const quests = await getDocs(questsRef)
  const promises = []
  quests.docs.forEach((quest: QueryDocumentSnapshot<DocumentData>) => {
    const questId = quest.id
    const questRef = collection(firestore, `quests/${questId}/bids`)
    for (let i = 0; i < 3; i++) {
      const bid: Bid = {
        bidId: faker.datatype.uuid(),
        questId: questId,
        userId: faker.datatype.uuid(),
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
        createdAt: faker.date.past(),
      }
      promises.push(addDoc(questRef, bid))
    }
  })
  const results = await Promise.all(promises)
}
