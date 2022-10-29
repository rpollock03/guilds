import { Typography } from "@mui/material"
import Link from "next/link"

export const Logo = () => {
  return (
    <Typography variant="h6">
      <Link href="/">
        <a style={{ textDecoration: "none", color: "inherit" }}>Guilds</a>
      </Link>
    </Typography>
  )
}
