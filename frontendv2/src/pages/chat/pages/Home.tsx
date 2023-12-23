import { Box, CssBaseline } from "@mui/material"
import React from "react"
import PrimaryAppBar from "./chatTemplates/PrimaryAppBar"
import { useTheme } from "@mui/material/styles"
import PrimaryDraw from "./chatTemplates/PrimaryDraw"
import SecoundaryDrawer from "./chatTemplates/SecoundaryDrawer"
import Main from "./chatTemplates/Main"

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDraw></PrimaryDraw>
      <SecoundaryDrawer />
      <Main />
    </Box>
  )
}

export default Home
