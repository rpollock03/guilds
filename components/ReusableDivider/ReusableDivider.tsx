import { Divider, Stack, Typography } from "@mui/material"

export function ReusableDivider() {
  return (
    <Stack
      py={5}
      direction="row"
      alignItems="center"
      spacing={2}
      m="auto"
      justifyContent="center"
    >
      <Typography variant="body1" color="primary.main">
        Software development
      </Typography>
      <Stack width="50%">
        <Divider orientation="horizontal" flexItem />
      </Stack>
    </Stack>
  )
}
