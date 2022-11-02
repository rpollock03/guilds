import Link from "next/link"
import { Stack, Typography, Chip } from "@mui/material"

const linkStyles = {
  cursor: "pointer",
  width: "fit-content",
}

function QuickLinks() {
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quick links
      </Typography>
      <Link href="/">
        <Typography variant="h6" sx={linkStyles}>
          Home
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Quests
        </Typography>
      </Link>
      <Stack direction="row" spacing={1} alignItems="center">
        <Link href="#">
          <Typography variant="h6" sx={linkStyles}>
            Top heroes
          </Typography>
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
        <Typography variant="h6" sx={linkStyles}>
          About us
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Guilds for business
        </Typography>
      </Link>
    </Stack>
  )
}

function Quests() {
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quests
      </Typography>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Most viewed
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Latest
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Highest bid
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Lowest bid
        </Typography>
      </Link>
    </Stack>
  )
}

function Social() {
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Social
      </Typography>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Twitter
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          LinkedIn
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Facebook
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Instagram
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Youtube
        </Typography>
      </Link>
    </Stack>
  )
}

function Legal() {
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Legal
      </Typography>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Terms
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Privacy
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Cookies
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Licenses
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Settings
        </Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6" sx={linkStyles}>
          Contact
        </Typography>
      </Link>
    </Stack>
  )
}

export { QuickLinks, Quests, Social, Legal }
