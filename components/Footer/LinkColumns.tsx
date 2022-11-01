import Link from "next/link"
import styled from "styled-components"
import { Stack, Typography, Chip } from "@mui/material"

const LinkText = styled(Typography)({
  cursor: "pointer",
  width: "fit-content",
})

function QuickLinks() {
  return (
    <Stack spacing={1.5} color="background.default" width="12rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quick links
      </Typography>
      <Link href="/">
        <LinkText variant="h6">Home</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Quests</LinkText>
      </Link>
      <Stack direction="row" spacing={1} alignItems="center">
        <Link href="#">
          <LinkText variant="h6">Top heroes</LinkText>
        </Link>
        <Chip
          variant="outlined"
          label="New"
          sx={{
            bgcolor: "text.secondary",
            color: "background.default",
            height: "1.5rem",
          }}
        />
      </Stack>
      <Link href="#">
        <LinkText variant="h6">About us</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Guilds for business</LinkText>
      </Link>
    </Stack>
  )
}

function Quests() {
  return (
    <Stack spacing={1.5} color="background.default" width="12rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quests
      </Typography>
      <Link href="#">
        <LinkText variant="h6">Most viewed</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Latest</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Highest bid</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Lowest bid</LinkText>
      </Link>
    </Stack>
  )
}

function Social() {
  return (
    <Stack spacing={1.5} color="background.default" width="12rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Social
      </Typography>
      <Link href="#">
        <LinkText variant="h6">Twitter</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">LinkedIn</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Facebook</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Instagram</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Youtube</LinkText>
      </Link>
    </Stack>
  )
}

function Legal() {
  return (
    <Stack spacing={1.5} color="background.default" width="12rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Legal
      </Typography>
      <Link href="#">
        <LinkText variant="h6">Terms</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Privacy</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Cookies</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Licenses</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Settings</LinkText>
      </Link>
      <Link href="#">
        <LinkText variant="h6">Contact</LinkText>
      </Link>
    </Stack>
  )
}

export { QuickLinks, Quests, Social, Legal }
