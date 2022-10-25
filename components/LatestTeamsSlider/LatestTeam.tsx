import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import LinesElipsis from "react-lines-ellipsis"
import { Grid, Box, Stack, Typography } from "@mui/material"
import { Team } from "storage/team"
import { StorageImage } from "reactfire"
import { TeamMember } from "./TeamMember"

const QuestThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
})

interface LatestTeamProps {
  team: Team
}

export function LatestTeam({ team }: LatestTeamProps) {
  const members = new Array(team.slots)
    .fill(0)
    .map((_, idx) =>
      team.members[idx] != undefined ? team.members[idx] : "empty slot"
    )

  const convertImageName = () => {
    const [imageName, imageExtension] = team.image.split(".")
    return imageName + "_420x240." + imageExtension
  }

  return (
    <Grid item xs={6}>
      <Box>
        <Stack spacing={3}>
          <QuestThumbnail
            storagePath={`quests/questsResized/${convertImageName()}`}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{team?.title}</Typography>
            <Link
              href={{
                pathname: "/team",
                query: { teamId: team.id },
              }}
            >
              <Image
                src="/arrow-right-up.svg"
                alt="arrow-right-up"
                width={15}
                height={15}
              />
            </Link>
          </Stack>
          <Typography variant="body1">
            <LinesElipsis
              text={team.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Typography>
          <Stack direction="row" spacing={1}>
            {members.map((member, idx) => (
              <TeamMember key={idx} member={member} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Grid>
  )
}
