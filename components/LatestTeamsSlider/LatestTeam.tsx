import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import { Grid, Box, Stack, Typography } from "@mui/material"
import { Team } from "storage/team"
import LinesElipsis from "react-lines-ellipsis"
import { StorageImage } from "reactfire"

const QuestThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
})

interface LatestTeamProps {
  team: Team
}

export function LatestTeam({ team }: LatestTeamProps) {
  const convertImageName = () => {
    const [imageName, imageExtension] = team.image.split(".")
    return imageName + "_420x240." + imageExtension
  }

  return (
    <Grid item xs={6}>
      <Box>
        <Stack spacing={1}>
          <QuestThumbnail
            storagePath={`quests/questsResized/${convertImageName()}`}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{team?.title}</Typography>
            <Link
              href={{
                pathname: "/team",
                query: { questId: team.id },
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
        </Stack>
      </Box>
    </Grid>
  )
}
