import { Box, CssBaseline } from "@mui/material"
import React from "react"
import PrimaryAppBar from "./chatTemplates/PrimaryAppBar"
import { useTheme } from "@mui/material/styles"
import PrimaryDraw from "./chatTemplates/PrimaryDraw"
import SecondaryDrawer from "./chatTemplates/SecondaryDrawer"
import Main from "./chatTemplates/Main"
import PopularChannels from "../components/PrimaryDraw/PopularChannels"
import ExploreCategories from "../components/SecoundaryDraw/ExploreCategories"
const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryDraw>
        <PopularChannels open={false} />
      </PrimaryDraw>
      <SecondaryDrawer>
        <ExploreCategories />
      </SecondaryDrawer>
      <Main />
    </Box>
  )
}

export default Home
