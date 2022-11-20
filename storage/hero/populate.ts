import {
  Firestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore"
import { Hero, Transaction } from "../../storage/hero"
import { faker } from "@faker-js/faker"

export const populateHeroes = async (firestore: Firestore) => {
  const heroRef = collection(firestore, `heroes`)
  const promises = []
  for (let i = 0; i < 3; i++) {
    const hero: Hero = {
      profilePicture: faker.image.imageUrl(),
      email: faker.internet.email(),
      name: {
        first: faker.name.firstName(),
        second: faker.name.middleName(),
        last: faker.name.lastName(),
      },
      location: {
        city: faker.address.city(),
        country: faker.address.country(),
      },
      bio: faker.lorem.sentences(5),
      twitter: faker.internet.url(),
      linkedin: faker.internet.url(),
      website: faker.internet.url(),
      portfolio: [faker.internet.url(), faker.internet.url()],
      experience: [
        {
          position: faker.name.jobTitle(),
          company: faker.company.name(),
          startDate: "20 October 2017",
          endDate: "03 January 2021",
        },
      ],
    }
    promises.push(addDoc(heroRef, hero))
    const results = await Promise.all(promises)
    console.log(results[0])
  }
}

export const populateTransactions = async (firestore: Firestore) => {
  try {
    const heroRef = collection(firestore, `heroes`)
    const heroDocs = await getDocs(heroRef)
    const amountFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
      maximumSignificantDigits: 2,
    })
    const promises = []
    heroDocs.forEach((heroDoc) => {
      for (let i = 0; i < 8; i++) {
        const heroId = heroDoc.id
        const transactionsRef = collection(
          firestore,
          `heroes/${heroId}/transactions`
        )
        const transactionRef = doc(transactionsRef)
        const transactionAmount = amountFormatter.format(
          faker.datatype.number({ min: -10000, max: 10000 })
        )
        const transaction: Transaction = {
          id: transactionRef.id,
          userId:
            heroDocs.docs[
              faker.datatype.number({ min: 0, max: heroDocs.docs.length - 1 })
            ].id,
          amount:
            transactionAmount[0] === "-"
              ? transactionAmount
              : `+${transactionAmount}`,
          date: faker.date.past(),
          description: faker.lorem.sentence(),
        }
        promises.push(setDoc(transactionRef, transaction))
      }
    })
    const results = await Promise.all(promises)
    alert("Transactions created: " + results?.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}
