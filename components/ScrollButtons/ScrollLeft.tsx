import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { IconButton } from "@mui/material"
import { MutableRefObject } from "react"

interface ScrollLeftProps {
  scrolledValue: number
  setScrolledValue: (value: number) => void
  refs: MutableRefObject<HTMLDivElement[]>
  containerRef: MutableRefObject<HTMLDivElement>
}

export function ScrollLeft({
  scrolledValue,
  setScrolledValue,
  refs,
  containerRef,
}: ScrollLeftProps) {
  const scrollLeft = () => {
    if (scrolledValue == 1) {
      setScrolledValue(0)
      containerRef?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } else {
      setScrolledValue(scrolledValue - 1)
      refs?.current[scrolledValue - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }

  return (
    <IconButton
      size="large"
      sx={{ border: "1px solid", borderColor: "text.secondary" }}
      onClick={() => scrollLeft()}
      disabled={scrolledValue == 0}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}
