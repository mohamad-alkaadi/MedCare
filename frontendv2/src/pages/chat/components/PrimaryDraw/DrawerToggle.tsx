import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import React from "react"

type Props = {
  open: boolean
  handleDrawOpen: () => void
  handleDrawClose: () => void
}
const DrawerToggle: React.FC<Props> = ({
  open,
  handleDrawClose,
  handleDrawOpen,
}) => {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={open ? handleDrawClose : handleDrawOpen}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
    </Box>
  )
}

export default DrawerToggle
