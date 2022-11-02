import Link from "next/link"
import { Stack, Typography, Chip } from "@mui/material"

export interface FooterLinkProps {
  href: string
  label: string
  displayNewChip?: boolean
}

export function FooterLink({ href, label, displayNewChip }: FooterLinkProps) {
  if (displayNewChip) {
    return (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ textDecoration: "none" }}
      >
        <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer", width: "fit-content" }}
          >
            {label}
          </Typography>
        </Link>
        <Chip
          variant="outlined"
          label="New"
          sx={{
            bgcolor: "text.secondary",
            color: "background.default",
            height: "1.5rem",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        />
      </Stack>
    )
  } else {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", width: "fit-content" }}
        >
          {label}
        </Typography>
      </Link>
    )
  }
}

export function QuickLinks() {
  const quickLinks: FooterLinkProps[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/quests",
      label: "Quests",
    },
    {
      href: "/top-heroes",
      label: "Top Heroes",
      displayNewChip: true,
    },
    {
      href: "/about-us",
      label: "About Us",
    },
    {
      href: "/guild-for-business",
      label: "Guild for Business",
    },
  ]

  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quick links
      </Typography>
      {quickLinks.map((link) => (
        <FooterLink key={link.label} {...link} />
      ))}
    </Stack>
  )
}

export function Quests() {
  const questsLinks: FooterLinkProps[] = [
    {
      href: "/quests",
      label: "All Quests",
    },
    {
      href: "/most-viewed",
      label: "Most Viewed",
    },
    {
      href: "/latest",
      label: "Latest",
    },
    {
      href: "/highest-bid",
      label: "Highest Bid",
    },
    {
      href: "/lowest-bid",
      label: "Lowest Bid",
    },
  ]
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Quests
      </Typography>
      {questsLinks.map((link) => (
        <FooterLink key={link.label} {...link} />
      ))}
    </Stack>
  )
}

export function Social() {
  const socialLinks: FooterLinkProps[] = [
    {
      href: "#",
      label: "Facebook",
    },
    {
      href: "#",
      label: "Twitter",
    },
    {
      href: "#",
      label: "Instagram",
    },
    {
      href: "#",
      label: "LinkedIn",
    },
    {
      href: "#",
      label: "YouTube",
    },
    {
      href: "#",
      label: "Instagram",
    },
  ]
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Social
      </Typography>
      {socialLinks.map((link) => (
        <FooterLink key={link.label} {...link} />
      ))}
    </Stack>
  )
}

export function Legal() {
  const legalLinks: Array<FooterLinkProps> = [
    {
      href: "/terms",
      label: "Terms of use",
    },
    {
      href: "/privacy",
      label: "Privacy policy",
    },
    {
      href: "/cookies",
      label: "Cookies policy",
    },
    {
      href: "/licenses",
      label: "Licenses",
    },
    {
      href: "/settings",
      label: "Settings",
    },
    {
      href: "/contact",
      label: "Contact us",
    },
  ]
  return (
    <Stack spacing={1.5} color="background.default" width="13rem">
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        Legal
      </Typography>
      {legalLinks.map((link) => (
        <FooterLink key={link.label} {...link} />
      ))}
    </Stack>
  )
}
