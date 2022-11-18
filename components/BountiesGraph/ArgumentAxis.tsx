import { ArgumentAxis } from "@devexpress/dx-react-chart-material-ui"
import { Typography } from "@mui/material"

export function CustomArgumentAxisTitle({ text, style, ...restProps }) {
  return (
    <ArgumentAxis.Label
      text={<Typography>Month</Typography>}
      sx={{ transform: "translateY(3rem)" }}
    />
  )
}
