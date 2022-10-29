import { AppBar, Toolbar } from "@mui/material"

import { NavMenu } from "./NavMenu"
import { Logo } from "./Logo"
import { UserMenu } from "./UserMenu"

export function Header(): JSX.Element {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          <Logo />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </>
  )
}
