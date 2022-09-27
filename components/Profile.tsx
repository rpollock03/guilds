import React, { useState, useEffect } from "react"
import { useAuth, useUser, useFirestore } from "reactfire"
import { doc, getDoc } from "firebase/firestore"
import EditProfile from "./EditProfile"

export default function Profile() {
  const { status, data: user } = useUser()
  const auth = useAuth()

  const [editMode, setEditMode] = useState(false)
  const [heroData, setHeroData] = useState({})

  const firestore = useFirestore()

  useEffect(() => {
    const getHeroData = async () => {
      try {
        const heroRef = doc(firestore, `heroes/${user.uid}`)
        const heroSnap = await getDoc(heroRef)
        if (heroSnap.exists()) {
          setHeroData(heroSnap.data())
        } else
          setHeroData({
            name: {
              first: "",
              second: "",
              last: "",
            },
            profilePicture: "",
            email: "",
            location: {
              city: "",
              country: "",
            },
            bio: "",
            twitter: "",
            linkedin: "",
            website: "",
            portfolio: [],
            experience: [
              { position: "", company: "", startDate: "", endDate: "" },
            ],
          })
      } catch (error) {
        alert("Error:" + error)
      }
    }

    if (status === "success" && user) getHeroData()
  }, [status, user])

  if (!user && status !== "success") {
    return <div>loading</div>
  }

  return (
    <div>
      <div>{user?.email}</div>
      <div onClick={() => auth.signOut()}>logout</div>
      <div>USER PROFILE</div>
      <div onClick={() => setEditMode(!editMode)}>
        {!editMode ? "Click to edit Profile" : "cancel edits"}
      </div>
      {editMode ? <EditProfile hero={heroData} /> : null}
    </div>
  )
}
