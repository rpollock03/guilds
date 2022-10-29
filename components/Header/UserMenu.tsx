import { useState, MouseEvent } from "react"
// import Image from "next/image"
import {
  IconButton,
  Typography,
  CircularProgress,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material"
import { useAuth, useSigninCheck } from "reactfire"
import Link from "next/link"

export const UserMenu = () => {
  const auth = useAuth()
  const { status, data: signInCheckResult } = useSigninCheck()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const settings = ["Dashboard", "Profile", "Account", "Logout"]

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box>
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
                      <Typography onClick={() => auth.signOut()}>Logout</Typography>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Link href="/login">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <Typography textAlign="center">Login</Typography>
              </a>
            </Link>
          )}
        </>
      </Tooltip>
    </Box>
  )
}
