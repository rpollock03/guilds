import { MenuItem, Stack } from "@mui/material"
import { sidebar } from "../../navigation"
import Link from "next/link"

import Image from "next/image"

interface MainNavProps {
  handleMouseOver: (params: number) => void
}

export const MainNav = ({ handleMouseOver }: MainNavProps) => {
  return (
    <Stack direction="column" flexGrow={1}>
      {sidebar.map((page, index) => (
        <MenuItem
          key={page.title}
          style={{
            width: 45,
            height: 45,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseOver={() => handleMouseOver(index)}
        >
          <Link
            href={"#"}
            style={{ textDecoration: "none", height: 20, width: 20 }}
          >
            <Image height={20} width={20} src={page.image} alt={page.title} />
          </Link>
        </MenuItem>
      ))}
    </Stack>
  )
}
