import * as React from "react"
import {
  Box,
  Typography,
  Container,
  Link,
  Stack,
  TextField,
  Button,
} from "@mui/material"
import styled from "styled-components"
import { classNames } from "react-select/dist/declarations/src/utils"

const EmailInput = styled(TextField)({
  width: "17rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      backgroundColor: "white",
      height: "3.05rem",
      borderRadius: "0.5rem",
    },
  },
})

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Guilds
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
      }}
    >
      <Stack>
        <Box sx={{ bgcolor: "secondary.main" }}>
          <Container>
            <Stack spacing={1} height="11rem" justifyContent="center">
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4" color="background.default">
                  Get notified when we launch
                </Typography>
                <Stack direction="row" spacing={2} height="2.8rem">
                  <EmailInput
                    placeholder="Enter your email"
                    variant="outlined"
                  />
                  <Button variant="contained" sx={{ borderRadius: "0.5rem" }}>
                    <Typography
                      sx={{
                        textTransform: "none",
                        px: "0.8rem",
                        fontWeight: 500,
                        fontStyle: "Jakarta",
                      }}
                      variant="h6"
                    >
                      Subscribe
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
              <Typography variant="h6" color="background.default">
                Stay up to date with the latest news, announcements and articles
              </Typography>
            </Stack>
          </Container>
        </Box>
        <Box height="30rem" sx={{ bgcolor: "secondary.light" }}>
          qwer
        </Box>
      </Stack>
    </Box>
  )
}
