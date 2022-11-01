import * as React from "react"
import {
  Box,
  Typography,
  Container,
  Link,
  Stack,
  TextField,
  Button,
  Chip,
  Divider,
} from "@mui/material"
import styled from "styled-components"
import Image from "next/image"
import { QuickLinks } from "./QuickLinks"
import { Quests } from "./Quests"
import { Social } from "./Social"
import { Legal } from "./Legal"
import { useState, SyntheticEvent } from "react"

const EmailInput = styled(TextField)({
  width: "17rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "0.5rem",
  },
})

export function Footer() {
  const [email, setEmail] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = () => {
    alert("subscribed: " + email)
  }

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
            <Stack spacing={2} height="11rem" justifyContent="center">
              <Stack
                direction="row"
                justifyContent="space-between"
                minHeight="2.8rem"
              >
                <Typography
                  variant="h4"
                  color="background.default"
                  fontWeight={600}
                >
                  Get notified when we launch
                </Typography>
                <form onSubmit={handleSubscribe}>
                  <Stack direction="row" spacing={3} height="3rem">
                    <EmailInput
                      variant="outlined"
                      placeholder="Enter your email"
                      type="email"
                      onChange={(e) => handleChange(e)}
                      value={email}
                    />
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "0.5rem" }}
                      type="submit"
                    >
                      <Typography
                        sx={{
                          textTransform: "none",
                          px: "0.6rem",
                          fontWeight: 500,
                          fontSize: "1rem",
                        }}
                      >
                        Subscribe
                      </Typography>
                    </Button>
                  </Stack>
                </form>
              </Stack>
              <Typography
                variant="h6"
                color="background.default"
                fontWeight={400}
              >
                Stay up to date with the latest news, announcements and articles
              </Typography>
            </Stack>
          </Container>
        </Box>
        <Box height="30rem" sx={{ bgcolor: "secondary.light" }}>
          <Container sx={{ mt: "3rem" }}>
            <Stack>
              <Stack direction="row" spacing="auto" height="80%">
                <Stack spacing={4} width="20rem">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Image
                      src="/GuildsLogo2.svg"
                      alt="Guilds Logo"
                      width={32}
                      height={32}
                    />
                    <Typography
                      variant="h5"
                      sx={{ color: "background.default", fontWeight: 700 }}
                    >
                      Guilds
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "background.default" }}>
                    Design amazing digital experiences that create more happy in
                    the world
                  </Typography>
                </Stack>
                <QuickLinks />
                <Quests />
                <Social />
                <Legal />
              </Stack>
              <Divider sx={{ bgcolor: "text.secondary", mt: "3rem" }} />
            </Stack>
            <Stack
              direction="row"
              height="5.5rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography color="text.secondary" fontWeight={400}>
                © 2022 Guilds. All rights reserved.
              </Typography>
              <Stack direction="row" spacing={3}>
                <Link href="#">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/youtube.svg"
                    alt="Youtube"
                    width={24}
                    height={24}
                  />
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </Box>
  )
}
