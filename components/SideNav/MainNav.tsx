import { MenuItem, Stack } from "@mui/material"
import Link from "next/link"
import { NavigationColumn } from "../../navigation"
import { useRouter } from "next/router"
import { NavIcon } from "./navIcons.js"

interface MainNavProps {
  pages: NavigationColumn
}

export const MainNav = ({ pages }: MainNavProps) => {
  const router = useRouter()

  return (
    <Stack direction="column" flexGrow={1}>
      <Stack direction="column" flexGrow={1}>
        {pages.navigationItem.map((page) => (
          <MenuItem
            key={page.href}
            style={{
              marginTop: 20,
              width: 45,
              height: 45,
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href={page.href}
              style={{ textDecoration: "none", height: 20, width: 20 }}
            >
              <NavIcon
                height={22}
                width={22}
                type={page.label}
                stroke={router.pathname == page.href ? "white" : "#96C59E"}
              />
            </Link>
          </MenuItem>
        ))}
      </Stack>
      <Stack>
        <MenuItem
          style={{
            width: 45,
            height: 45,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={"/profile"}
            style={{ textDecoration: "none", height: 20, width: 20 }}
          >
            <NavIcon
              height={22}
              width={22}
              type={"Profile"}
              stroke={router.pathname == "/profile" ? "white" : "#96C59E"}
            />
          </Link>
        </MenuItem>
        <MenuItem
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: 45,
            height: 45,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={"/settings"}
            style={{ textDecoration: "none", height: 20, width: 20 }}
          >
            <NavIcon
              height={22}
              width={22}
              type={"Settings"}
              stroke={router.pathname == "/settings" ? "white" : "#96C59E"}
            />
          </Link>
        </MenuItem>
      </Stack>
    </Stack>
  )
}
