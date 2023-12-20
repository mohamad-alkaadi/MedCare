import { Box, CssBaseline } from "@mui/material"
import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import { useTheme } from "@mui/material/styles"

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      Home
    </Box>
  )
}

export default Home
