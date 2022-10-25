import styled from "styled-components"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Link from "next/link"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Box, Stack, Button, Typography, IconButton } from "@mui/material"
import { LatestTeam } from "./LatestTeam"
import { Team } from "storage/team"
import { useRef, useState } from "react"

const LatestTeamsStack = styled(Stack)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
})

export function LatestTeamsSlider() {
  const [scrolledTeam, setScrolledTeam] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const firestore = useFirestore()
  const teamsRef = collection(firestore, "teams")
  const teamsQuery = query(teamsRef, orderBy("createdAt", "desc"), limit(20))
  const { status: teamsStatus, data: teams } =
    useFirestoreCollectionData(teamsQuery)

  const latestTeamsRefs = useRef([])
  const latestTeamsContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrolledTeam == 1) {
      setScrolledTeam(0)
      latestTeamsContainerRef?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } else {
      setScrolledTeam(scrolledTeam - 1)
      latestTeamsRefs?.current[scrolledTeam - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }

  const scrollRight = () => {
    setScrolledTeam(scrolledTeam + 1)
    latestTeamsRefs?.current[scrolledTeam + 1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  return (
    <Stack
      spacing={4}
      sx={{
        maxWidth: "calc(1200px + (100vw - 1200px) / 2)",
        ml: "calc((100vw - 1200px) / 2)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" width="1200px">
        <Stack spacing={2}>
          <Typography variant="h4">Latest teams</Typography>
          <Typography variant={"body2"} color={"text.secondary"}>
            The latest teams that have been posted to Guilds
          </Typography>
        </Stack>
        <Link href="/quests">
          <Button variant="contained" sx={{ height: "2.5rem" }}>
            <Typography variant="body2" sx={{ textTransform: "none" }}>
              View all teams
            </Typography>
          </Button>
        </Link>
      </Stack>
      <Stack spacing={6}>
        <LatestTeamsStack
          direction="row"
          sx={{
            overflow: mouseScrollDisabled ? "hidden" : "auto",
          }}
          ref={latestTeamsContainerRef}
          onMouseEnter={() => setMouseScrollDisabled(true)}
          onMouseLeave={() => setMouseScrollDisabled(false)}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ mr: "calc((100vw - 1200px) / 2)" }}
          >
            {teamsStatus === "success" ? (
              teams &&
              teams?.map((team: Team, idx) => (
                <Box
                  key={idx}
                  ref={(ref) => {
                    latestTeamsRefs.current[idx] = ref
                  }}
                >
                  <LatestTeam team={team} />
                </Box>
              ))
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Stack>
        </LatestTeamsStack>
        <Stack direction="row" spacing={3}>
          <IconButton
            size="large"
            sx={{ border: "1px solid", borderColor: "text.secondary" }}
            onClick={() => scrollLeft()}
            disabled={scrolledTeam == 0}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: "1px solid", borderColor: "text.secondary" }}
            onClick={() => scrollRight()}
            disabled={scrolledTeam == teams?.length - 1}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
