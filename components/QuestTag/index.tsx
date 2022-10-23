import { Tag as TagEnum } from "storage/quest"
import { Chip } from "@mui/material"
import { useEffect, useState } from "react"

interface TagProps {
  value: TagEnum
}

export function QuestTag({ value }: TagProps): JSX.Element {
  const [tagStyle, setTagStyle] = useState({ background: "", color: "" })

  useEffect(() => {
    getTagStyle()
  }, [])

  const getTagStyle = () => {
    switch (value) {
      case TagEnum.SoftwareDevelopment:
        setTagStyle({
          background: "rgba(63, 81, 181, 0.1)",
          color: "rgba(63, 81, 181, 1)",
        })
        break
      case TagEnum.Research:
        setTagStyle({
          background: "rgba(245, 0, 87, 0.1)",
          color: "rgba(245, 0, 87, 1)",
        })
        break
      case TagEnum.Presentation:
        setTagStyle({
          background: "rgba(255, 152, 0, 0.1)",
          color: "rgba(255, 152, 0, 1)",
        })
        break
      case TagEnum.Management:
        setTagStyle({
          background: "rgba(76, 175, 80, 0.1)",
          color: "rgba(76, 175, 80, 1)",
        })
        break
      case TagEnum.Leadership:
        setTagStyle({
          background: "rgba(255, 87, 34, 0.1)",
          color: "rgba(255, 87, 34, 1)",
        })
        break
      case TagEnum.Design:
        setTagStyle({
          background: "rgba(156, 39, 176, 0.1)",
          color: "rgba(156, 39, 176, 1)",
        })
        break
      case TagEnum.CustomerSuccess:
        setTagStyle({
          background: "rgba(0, 188, 212, 0.1)",
          color: "rgba(0, 188, 212, 1)",
        })
        break
    }
  }

  return <Chip label={value} sx={tagStyle} />
}
