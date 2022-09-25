import React, {useState} from 'react'
import { Container, Box } from "@mui/material"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'

export default function profile() {

  const [editMode, setEditMode]=useState(false)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div onClick={() => setEditMode(!editMode)}>Click to edit Profile</div>
      {editMode? <EditProfile/> : <Profile/>    
    }

      <Container>
      </Container>
      <Footer />
    </Box>
  )
}
