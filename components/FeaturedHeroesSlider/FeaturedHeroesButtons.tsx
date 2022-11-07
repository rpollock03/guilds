import Link from "next/link"
import { Button, Stack, Typography } from "@mui/material"

export function FeaturedHeroesButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Link href="/heroes" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
            borderColor: (theme) => theme.palette.grey[300],
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
            color={(theme) => theme.palette.grey[700]}
          >
            Our customers
          </Typography>
        </Button>
      </Link>
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
          >
            Create account
          </Typography>
        </Button>
      </Link>
    </Stack>
  )
}
