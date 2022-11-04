import styled from "styled-components"
import { StorageImage } from "reactfire"
import { Typography, Stack, Rating } from "@mui/material"
import { DocumentData } from "firebase/firestore"

const HeroAvatar = styled(StorageImage)({
  objectFit: "cover",
  height: 592,
  width: 576,
})

interface TeamLeaderAvatarProps {
  teamLeader: DocumentData
}

export function TeamLeaderAvatar({ teamLeader }: TeamLeaderAvatarProps) {
  const rating = Math.round(teamLeader?.rating * 2) / 2
  return (
    <Stack position="relative">
      <HeroAvatar storagePath="heroes/hero.jpeg" />
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          width: 576,
          height: "11rem",
          backdropFilter: "blur(0.8rem)",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          p: "1.5rem",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3" fontWeight={600} color="background.default">
            {`${teamLeader?.name.first} ${teamLeader?.name.second} ${teamLeader?.name.last}`}
          </Typography>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "background.default",
              },
              "& .MuiRating-iconEmpty": {
                color: "background.default",
              },
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="h6" color="background.default" fontWeight={600}>
            {teamLeader?.experience[0]?.company}
          </Typography>
          <Typography
            variant="body1"
            color="background.default"
            fontWeight={400}
          >
            {teamLeader?.experience[0].position}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
