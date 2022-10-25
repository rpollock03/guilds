import {
  Firestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  setDoc,
  doc,
} from "firebase/firestore"
import { faker } from "@faker-js/faker"
import { Team, Role, Industry } from "../../storage/team"

const populateTeams = async (firestore: Firestore) => {
  try {
    const promises = []
    const heroesRef = collection(firestore, `heroes`)
    const heroes = await getDocs(heroesRef)
    for (let i = 0; i < 3; i++) {
      const roles = Object.values(Role).filter(() => Math.random() > 0.5)
      const developerIds = [
        "imZrHGqnOCfGy44ya596jOyNHIG3",
        "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
        "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
      ]
      const slots = faker.datatype.number({ min: 1, max: 10 })
      const heroesIds = heroes?.docs
        ?.map((hero: QueryDocumentSnapshot<DocumentData>) => hero.id)
        .splice(0, faker.datatype.number({ min: 1, max: slots }))
      const userId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
      const teamsRef = collection(firestore, "teams")
      const teamRef = doc(teamsRef)
      const team: Team = {
        id: teamRef.id,
        creatorId: userId,
        title: faker.lorem.sentence(5),
        description: faker.lorem.sentences(5),
        roles: roles,
        industry:
          Object.values(Industry)[faker.datatype.number({ min: 0, max: 3 })],
        image: "office.jpeg",
        timeEstimate: faker.datatype.number({ min: 1, max: 10 }) + " months",
        slots: slots,
        members: heroesIds,
        createdAt: faker.date.past(),
      }
      promises.push(setDoc(teamRef, team))
    }
    const results = await Promise.all(promises)
    alert("Teams created: " + results.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}

export { populateTeams }
