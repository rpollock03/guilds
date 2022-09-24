// import styled from "@emotion/styled"
import { IconButton, AppBar, Toolbar, Typography, Button } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useRouter } from "next/router"

export function Header(): JSX.Element {
  const router = useRouter()
  return <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Guilds
        </Typography>
        <Button
          color="inherit"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </>
}
