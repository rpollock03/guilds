import { AppBar, Stack } from "@mui/material"
import { MainNav } from "./MainNav"
import { UserMenu } from "../../components/Header/UserMenu"
import { navigation } from "../../navigation"
import Image from "next/image"

export function SideNav(): JSX.Element {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        borderRadius: "0px 25px 25px 0px",
        width: "82px",
        height: "100vh",
      }}
    >
      <Stack
        direction="column"
        sx={{ marginY: "30px" }}
        flexGrow={1}
        justifyContent="space-around"
        alignItems="center"
      >
        <Image
          src="/guilds-logo.svg"
          width={36}
          height={36}
          alt="Guilds Logo"
          color={"blue"}
        />
        <MainNav pages={navigation.quickLinks} />
        <UserMenu />
      </Stack>
    </AppBar>
  )
}
