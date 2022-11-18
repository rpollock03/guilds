import { Title } from "@devexpress/dx-react-chart-material-ui"
import { Typography, IconButton, Stack, Box } from "@mui/material"
import { MoreVert } from "@mui/icons-material"

export function CustomTitle({ text, style, ...restProps }) {
  return (
    <Title.Text
      text={
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="text.primary">
              {text}
            </Typography>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" spacing={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                width="0.7rem"
                height="0.7rem"
                bgcolor="#50915B"
                borderRadius="50%"
              />
              <Typography variant="body2" color="text.secondary">
                Earnings
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                width="0.7rem"
                height="0.7rem"
                bgcolor="#7BB785"
                borderRadius="50%"
              />
              <Typography variant="body2" color="text.secondary">
                XP
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      }
      {...restProps}
    />
  )
}
