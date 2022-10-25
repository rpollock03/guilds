import styled from "styled-components"
import { Box } from "@mui/material"
import { StorageImage } from "reactfire"

const MemberIcon = styled(StorageImage)({
  objectFit: "cover",
  height: "1.5rem",
  width: "1.5rem",
  borderRadius: "50%",
})

interface TeamMemberProps {
  member: string
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <Box>
      {member !== "empty slot" ? (
        <MemberIcon storagePath={`quests/office.jpeg`} />
      ) : (
        <Box
          sx={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            backgroundColor: (theme) => theme.palette.grey[200],
          }}
        />
      )}
    </Box>
  )
}
