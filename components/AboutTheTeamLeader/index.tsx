import { Stack } from "@mui/system"
import { DocumentData } from "firebase/firestore"
import { TeamLeaderAvatar } from "./TeamLeaderAvatar"
import { TeamLeaderInfo } from "./TeamLeaderInfo"

interface AboutTheTeamLeaderProps {
  teamLeader: DocumentData
}

export function AboutTheTeamLeader({ teamLeader }: AboutTheTeamLeaderProps) {
  return (
    <Stack spacing={3} direction={{ lg: "row", xl: "row" }} alignItems="center">
      <TeamLeaderInfo teamLeader={teamLeader} />
      <TeamLeaderAvatar teamLeader={teamLeader} />
    </Stack>
  )
}
