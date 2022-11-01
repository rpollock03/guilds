import { Stack, Typography, Chip } from "@mui/material"
import Link from "next/link"

export function Quests() {
  return (
    <Stack spacing={1.5} color="background.default">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quests
      </Typography>
      <Link href="#">
        <Typography variant="h6">Most viewed</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Latest</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Highest bid</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Lowest bid</Typography>
      </Link>
    </Stack>
  )
}
