import { Firestore, doc, getDoc, addDoc, collection } from "firebase/firestore"
import { Quest, Bid } from "storage/quest"
import { faker } from "@faker-js/faker"
import { firestore } from "storage/storage"
import { readQuests } from "../firestore/quests"

const writeBid = async (firestore: Firestore, bid: Bid) => {
  const bidColRef = collection(firestore, `quests/${bid.questId}/bids`)
  const bidRef = doc(firestore, `quests/${bid.questId}/bids/${bid.bidId}`)
  const bidSnap = await getDoc(bidRef)
  if (bidSnap.exists()) {
    const writeBid = await addDoc(bidColRef, bid)
  }
}

const readBids = async (
  firestore: Firestore,
  reactfire: any,
  questId: string
) => {
  const bidRef = collection(firestore, `quests/${questId}/bids`)
  const { data: bidDocs } = reactfire.getCol(bidRef)
  return bidDocs.docs
}

const populateBids = async (firestore: Firestore, reactfire: any) => {
  const quests = await readQuests(firestore, reactfire)
  Promise.all(
    quests.map(async (quest: Quest) => {
      for (let i = 0; i < faker.datatype.number({ min: 0, max: 50 }); i++) {
        const bid: Bid = {
          bidId: faker.datatype.uuid(),
          questId: quest.id,
          userId: faker.datatype.uuid(),
          amount: faker.datatype.number({ min: 1, max: 1000 }),
          timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
          createdAt: faker.date.past(),
        }
        await writeBid(firestore, bid)
      }
    })
  )
}

export { writeBid, readBids, populateBids }
