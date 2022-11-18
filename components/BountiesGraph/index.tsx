import * as React from "react"
import Paper from "@mui/material/Paper"
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui"
import { CustomTitle } from "./Title"
import { CustomArgumentAxisTitle } from "./ArgumentAxis"

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
]

export function BountiesGraph({ period }) {
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="value" argumentField="argument" />
        <Title
          text="Total Earnings | Total XP Earned"
          textComponent={CustomTitle}
        />
        <ArgumentAxis labelComponent={CustomArgumentAxisTitle} />
      </Chart>
    </Paper>
  )
}
