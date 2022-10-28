import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"

interface FeaturedCompaniesProps {
  image: string
}

export default function FeaturedCompany({ image }: FeaturedCompaniesProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box width={40} height={40}>
        <Image src={image} width={40} height={40} />
      </Box>
      <Typography variant="h5">Guilds</Typography>
    </Stack>
  )
}
