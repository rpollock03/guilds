import styled from "styled-components"
import Link from "next/link"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Box, Stack, Button, Typography } from "@mui/material"
import { LatestTeam } from "./LatestTeam"
import { Team } from "storage/team"
import { useRef, useState } from "react"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"

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
          <ScrollLeft
            scrolledValue={scrolledTeam}
            setScrolledValue={setScrolledTeam}
            refs={latestTeamsRefs}
            containerRef={latestTeamsContainerRef}
          />
          <ScrollRight
            scrolledValue={scrolledTeam}
            setScrolledValue={setScrolledTeam}
            refs={latestTeamsRefs}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
