import { Tag as TagEnum } from "storage/quest"
import { Chip } from "@mui/material"
import { useEffect, useState } from "react"

interface TagProps {
  value: TagEnum
}

export function QuestTag({ value }: TagProps): JSX.Element {
  const [tagTheme, setTagTheme] = useState({ text: "", background: "" })

  useEffect(() => {
    getTagTheme()
  }, [])

  const getTagTheme = () => {
    switch (value) {
      case TagEnum.SoftwareDevelopment:
        setTagTheme({ text: "#fff", background: "#3f51b5" })
        break
      case TagEnum.Research:
        setTagTheme({ text: "#fff", background: "#f50057" })
        break
      case TagEnum.Presentation:
        setTagTheme({ text: "#fff", background: "#ff9800" })
        break
      case TagEnum.Management:
        setTagTheme({ text: "#fff", background: "#4caf50" })
        break
      case TagEnum.Leadership:
        setTagTheme({ text: "#fff", background: "#ff5722" })
        break
      case TagEnum.Design:
        setTagTheme({ text: "#fff", background: "#9c27b0" })
        break
      case TagEnum.CustomerSuccess:
        setTagTheme({ text: "#fff", background: "#00bcd4" })
        break
    }
  }

  return (
    <Chip
      label={value}
      sx={{ background: tagTheme.background, color: tagTheme.text }}
    />
  )
}
