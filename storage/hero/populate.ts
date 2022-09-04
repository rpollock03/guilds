import { Firestore, collection, getDocs, addDoc } from "firebase/firestore"
import { Hero } from "../../storage/hero"
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
        last: faker.name.lastName()
      },
      location: {
        city: faker.address.city() ,
        country: faker.address.country()  
      },
      bio: faker.lorem.sentences(5),
      twitter: faker.internet.url(),
      linkedin: faker.internet.url(),
      website: faker.internet.url(),
      portfolio: []
    }
    promises.push(addDoc(heroRef, hero))
    const results = await Promise.all(promises)
    console.log(results[0])
  }
}
