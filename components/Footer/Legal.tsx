import { Stack, Typography, Chip } from "@mui/material"
import Link from "next/link"

export function Legal() {
  return (
    <Stack spacing={1.5} color="background.default">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Legal
      </Typography>
      <Link href="#">
        <Typography variant="h6">Terms</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Privacy</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Cookies</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Licenses</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Settings</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">contact</Typography>
      </Link>
    </Stack>
  )
}
