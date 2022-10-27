import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { IconButton } from "@mui/material"
import { MutableRefObject } from "react"

interface ScrollRightProps {
  scrolledValue: number
  setScrolledValue: (value: number) => void
  refs: MutableRefObject<HTMLDivElement[]>
}

export function ScrollRight({
  scrolledValue,
  setScrolledValue,
  refs,
}: ScrollRightProps) {
  const scrollRight = () => {
    if (scrolledValue < refs.current.length - 1) {
      setScrolledValue(scrolledValue + 1)
      refs?.current[scrolledValue + 1]?.scrollIntoView({
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
      onClick={() => scrollRight()}
    >
      <ArrowForwardIcon />
    </IconButton>
  )
}
