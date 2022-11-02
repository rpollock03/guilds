import * as React from "react"
import Image from "next/image"
import { Box, Typography, Container, Stack, Divider } from "@mui/material"
import { LinkColumns } from "./LinkColumns"
import { Subscribe } from "./Subscribe"
import { Socials } from "./Socials"

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
                <Subscribe />
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
              <Stack direction="row" height="80%">
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
                <LinkColumns />
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
              <Socials />
            </Stack>
          </Container>
        </Box>
      </Stack>
    </Box>
  )
}
