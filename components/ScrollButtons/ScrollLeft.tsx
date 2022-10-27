import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { IconButton } from "@mui/material"
import { MutableRefObject } from "react"

interface ScrollLeftProps {
  scrolledValue: number
  setScrolledValue: (value: number) => void
  refs: MutableRefObject<HTMLDivElement[]>
}

export function ScrollLeft({
  scrolledValue,
  setScrolledValue,
  refs,
}: ScrollLeftProps) {
  const scrollLeft = () => {
    if (scrolledValue > 0) {
      setScrolledValue(scrolledValue - 1)
      refs?.current[scrolledValue - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      })
    }
  }

  return (
    <IconButton
      size="large"
      sx={{ border: "1px solid", borderColor: "text.secondary" }}
      onClick={() => scrollLeft()}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}
