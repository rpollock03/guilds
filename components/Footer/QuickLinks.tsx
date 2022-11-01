import { Stack, Typography, Chip } from "@mui/material"
import Link from "next/link"

export function QuickLinks() {
  return (
    <Stack spacing={1.5} color="background.default">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quick links
      </Typography>
      <Link href="#">
        <Typography variant="h6">Home</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Quests</Typography>
      </Link>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="#">
          <Typography variant="h6">Top heroes</Typography>
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
        <Typography variant="h6">About us</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Guilds for business</Typography>
      </Link>
    </Stack>
  )
}
