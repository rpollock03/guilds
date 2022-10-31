import * as React from "react"
import { Box, Typography, Avatar, Stack, Grid } from "@mui/material"
import styled from "@emotion/styled"
import StarIcon from "@mui/icons-material/Star"
import Image from "next/image"

const UserAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border: 2.5px solid #ffffff;
  border-radius: 200px;
  margin: 0px -7px;
`

const Star = styled(StarIcon)`
  color: #fec84b;
`

const AverageReview = styled(Typography)`
  color: #3a6942;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 4px;
`

const ReviewInfo = styled(Typography)`
  color: #667085;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 4px;
`

const Arrow = styled(Box)`
  position: relative;
  top: -170px;
  left: 360px;
`

export function HeroHeader() {
  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="heroHeading" color="text.primary">
          Complete quests and rise through the ranks
        </Typography>
        <Typography
          width={{ md: "70%" }}
          variant="heroSubheading"
          color="text.secondary"
          sx={{ my: 2 }}
        >
          One-off jobs hosted by companies in need of a helping hand. Level up
          your experience by completing taks and earn income.
        </Typography>
        <Stack direction="row" spacing={{ xs: 2 }}>
          <Stack direction="row">
            <UserAvatar
              alt="user avatar"
              src="http://placekitten.com/200/300?image=1"
            />
            <UserAvatar
              alt="user avatar"
              src="http://placekitten.com/200/300?image=2"
            />
            <UserAvatar
              alt="user avatar"
              src="http://placekitten.com/200/300?image=3"
            />
            <UserAvatar
              alt="user avatar"
              src="http://placekitten.com/200/300?image=4"
            />
            <UserAvatar
              alt="user avatar"
              src="http://placekitten.com/200/300?image=5"
            />
          </Stack>
          <Stack direction="column">
            <Stack direction="row">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <AverageReview>5.0</AverageReview>
            </Stack>
            <ReviewInfo>from 200+ reviews</ReviewInfo>
          </Stack>
        </Stack>
        <Arrow sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Image
            alt="header arrow"
            src="/HeaderArrow.svg"
            width={300}
            height={300}
          />
        </Arrow>
      </Grid>

      <Grid item xs={12} sm={8} md={6}>
        {/*sign in / auth components here*/}
        <Typography>Test</Typography>
      </Grid>
    </Grid>
  )
}
