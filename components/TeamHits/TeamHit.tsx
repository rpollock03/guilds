import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import LinesElipsis from "react-lines-ellipsis"
import { Grid, Chip, Stack, Typography } from "@mui/material"
import { Team } from "types/team"
import { StorageImage } from "reactfire"
import { TeamMembers } from "../TeamMembers"

const TeamThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
})

interface LatestTeamProps {
  hit: Team
}

export function TeamHit({ hit }: LatestTeamProps) {
  return (
    <Grid item xs={12}>
      <Stack spacing={2}>
        <TeamThumbnail storagePath={`general/${hit.image}`} />
        <Typography variant="body2" color="primary.main" fontWeight={600}>
          {hit.timeEstimate}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" fontWeight={600}>
            {hit?.title}
          </Typography>
          <Link
            href={{
              pathname: "/team",
              query: { teamId: hit.id },
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
        <Typography variant="body2" color={(theme) => theme.palette.grey[500]}>
          <LinesElipsis
            text={hit.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <TeamMembers team={hit} />
          <Chip
            label={hit.highlight}
            sx={{
              width: "fit-content",
              backgroundColor: "primary.light",
              color: "primary.main",
            }}
          />
        </Stack>
      </Stack>
    </Grid>
  )
}
