import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Box, Stack, Button, Typography, IconButton } from "@mui/material"
import Link from "next/link"
import { LatestQuest } from "./LatestQuest"
import { Quest } from "storage/quest"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useRef, useState } from "react"
import styled from "styled-components"

const LatestQuestsStack = styled(Stack)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
})

export function LatestQuestsSlider() {
  const [scrolledQuest, setScrolledQuest] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const firestore = useFirestore()
  const questsRef = collection(firestore, "quests")
  const questsQuery = query(questsRef, orderBy("createdAt", "desc"), limit(20))
  const { status: questsStatus, data: quests } =
    useFirestoreCollectionData(questsQuery)

  const latestQuestsRefs = useRef([])
  const latestQuestsContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrolledQuest == 1) {
      setScrolledQuest(0)
      latestQuestsContainerRef?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } else {
      setScrolledQuest(scrolledQuest - 1)
      latestQuestsRefs?.current[scrolledQuest - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }

  const scrollRight = () => {
    setScrolledQuest(scrolledQuest + 1)
    latestQuestsRefs?.current[scrolledQuest + 1]?.scrollIntoView({
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
          <Typography variant="h4">Latest quests</Typography>
          <Typography variant={"body2"} color={"text.secondary"}>
            The latest quests that have been posted to Guilds
          </Typography>
        </Stack>
        <Link href="/quests">
          <Button variant="contained" sx={{ height: "2.5rem" }}>
            <Typography variant="body2" sx={{ textTransform: "none" }}>
              View all quests
            </Typography>
          </Button>
        </Link>
      </Stack>
      <Stack spacing={6}>
        <LatestQuestsStack
          direction="row"
          sx={{
            overflow: mouseScrollDisabled ? "hidden" : "auto",
          }}
          ref={latestQuestsContainerRef}
          onMouseEnter={() => setMouseScrollDisabled(true)}
          onMouseLeave={() => setMouseScrollDisabled(false)}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ mr: "calc((100vw - 1200px) / 2)" }}
          >
            {questsStatus === "success" ? (
              quests &&
              quests?.map((quest: Quest, idx) => (
                <Box
                  key={idx}
                  ref={(ref) => {
                    latestQuestsRefs.current[idx] = ref
                  }}
                >
                  <LatestQuest quest={quest} />
                </Box>
              ))
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Stack>
        </LatestQuestsStack>
        <Stack direction="row" spacing={3}>
          <IconButton
            size="large"
            sx={{ border: "1px solid", borderColor: "text.secondary" }}
            onClick={() => scrollLeft()}
            disabled={scrolledQuest == 0}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: "1px solid", borderColor: "text.secondary" }}
            onClick={() => scrollRight()}
            disabled={scrolledQuest == quests?.length - 1}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
