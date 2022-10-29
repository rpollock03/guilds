import { useState, MouseEvent } from "react"
// import Image from "next/image"
import {
  IconButton,
  Typography,
  Button,
  CircularProgress,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material"
import { useRouter } from "next/router"
import { useAuth, useSigninCheck } from "reactfire"

export const UserMenu = () => {
  const auth = useAuth()
  const router = useRouter()
  const { status, data: signInCheckResult } = useSigninCheck()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const settings = ["Dashboard", "Profile", "Account", "Logout"]

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const LoginButton = () => (
    <Button color="inherit" onClick={() => router.push("/login")}>
      Login
    </Button>
  )

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Settings">
        <>
          {status === "loading" ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : signInCheckResult.signedIn ? (
            <>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar src={signInCheckResult.user.photoURL} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                anchorEl={anchorElUser}
                onClose={handleCloseUserMenu}
                keepMounted
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting === "Logout" ? (
                      <Button onClick={() => auth.signOut()}>Logout</Button>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <LoginButton />
          )}
        </>
      </Tooltip>
    </Box>
  )
}
