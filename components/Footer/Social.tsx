import { Stack, Typography, Chip } from "@mui/material"
import Link from "next/link"

export function Social() {
  return (
    <Stack spacing={1.5} color="background.default">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Social
      </Typography>
      <Link href="#">
        <Typography variant="h6">Twitter</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">LinkedIn</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Facebook</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Instagram</Typography>
      </Link>
      <Link href="#">
        <Typography variant="h6">Youtube</Typography>
      </Link>
    </Stack>
  )
}
