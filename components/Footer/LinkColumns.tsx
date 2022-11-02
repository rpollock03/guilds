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
            sx={{
              cursor: "pointer",
              width: "fit-content",
            }}
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

export function LinkColumns() {
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

  const legalLinks: FooterLinkProps[] = [
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

  const LinkColumns = [
    {
      title: "Quick Links",
      links: quickLinks,
    },
    {
      title: "Quests",
      links: questsLinks,
    },
    {
      title: "Social",
      links: socialLinks,
    },
    {
      title: "Legal",
      links: legalLinks,
    },
  ]

  return (
    <Stack direction="row">
      {LinkColumns.map((column) => (
        <Stack
          spacing={1.5}
          color="background.default"
          width="13rem"
          key={column.title}
        >
          <Typography
            variant="body1"
            color={(theme) =>
              theme.palette.mode == "light"
                ? "text.secondary"
                : "background.secondary"
            }
            sx={{ fontWeight: 600 }}
          >
            {column.title}
          </Typography>
          {column.links.map((link) => (
            <FooterLink key={link.label} {...link} />
          ))}
        </Stack>
      ))}
    </Stack>
  )
}
