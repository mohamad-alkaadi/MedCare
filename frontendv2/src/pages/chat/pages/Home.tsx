import { Box, CssBaseline } from "@mui/material"
import React from "react"
import PrimaryAppBar from "./chatTemplates/PrimaryAppBar"
import { useTheme } from "@mui/material/styles"
import PrimaryDraw from "./chatTemplates/PrimaryDraw"

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDraw></PrimaryDraw>
    </Box>
  )
}

export default Home
