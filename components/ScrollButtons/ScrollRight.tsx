import { IconButton } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
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
    setScrolledValue(scrolledValue + 1)
    refs?.current[scrolledValue + 1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  return (
    <IconButton
      size="large"
      sx={{ border: "1px solid", borderColor: "text.secondary" }}
      onClick={() => scrollRight()}
      disabled={scrolledValue == refs.current.length - 1}
    >
      <ArrowForwardIcon />
    </IconButton>
  )
}
