import { ChevronLeft } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import React from "react"

const DrawerToggle = () => {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton>
        <ChevronLeft />
      </IconButton>
    </Box>
  )
}

export default DrawerToggle
