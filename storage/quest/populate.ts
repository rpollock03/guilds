import {
  Firestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  addDoc,
} from "firebase/firestore"
import { Quest, Bid, Tag } from "../../storage/quest"
import { faker } from "@faker-js/faker"

const populateQuests = async (firestore: Firestore) => {
  try {
    const promises = []
    for (let i = 0; i < 3; i++) {
      const questRef = collection(firestore, "quests")
      const quest: Quest = {
        image: faker.image.imageUrl(),
        reward: faker.datatype.number({ min: 1, max: 1000 }),
        title: faker.lorem.sentence(5),
        description: faker.lorem.sentences(5),
        tags: [Object.values(Tag)[faker.datatype.number(6)]],
      }
      promises.push(addDoc(questRef, quest))
    }
    const results = await Promise.all(promises)
    alert("Quests created: " + results.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}

const populateBids = async (firestore: Firestore) => {
  try {
    const questsRef = collection(firestore, `quests`)
    const quests = await getDocs(questsRef)
    const promises = []
    quests.docs.forEach((quest: QueryDocumentSnapshot<DocumentData>) => {
      for (let i = 0; i < 3; i++) {
        const bidRef = collection(firestore, `quests/${quest.id}/bids`)
        const bid: Bid = {
          userId: faker.datatype.uuid(),
          amount: faker.datatype.number({ min: 1, max: 1000 }),
          timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
          createdAt: faker.date.past(),
        }
        promises.push(addDoc(bidRef, bid))
      }
    })
    const results = await Promise.all(promises)
    alert("Bids created: " + results.length)
  } catch (e) {
    console.log(e)
    alert("Error: " + e)
  }
}

export { populateQuests, populateBids }
