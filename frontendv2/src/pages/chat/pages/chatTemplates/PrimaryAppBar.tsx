import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React, { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"

const PrimaryAppBar = () => {
  const theme = useTheme()
  const [sideMenu, setSideMenu] = useState(false)
  // const toggleDrawer =
  // (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event.type === "keydown" &&
  //     ((event as React.KeyboardEvent).key === "Tab" ||
  //       (event as React.KeyboardEvent).key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setSideMenu(open);
  // };

  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"))

  useEffect(() => {
    if (isSmallScreen && sideMenu) {
      setSideMenu(false)
    }
  }, [isSmallScreen])

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
        // what ever the drawer is + 2 meaning make it on top of it
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar.height,
          minHeight: theme.primaryAppBar.height,
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {/* <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: 0.5 }}
          > */}
          <IconButton
            color="inherit"
            onClick={() => setSideMenu(!sideMenu)}
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: 0.5 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* <Drawer
          anchor="left"
          open={sideMenu}
          onClose={() => toggleDrawer(false)}
        > */}
        <Drawer
          anchor="left"
          open={sideMenu}
          onClose={() => setSideMenu(false)}
        >
          {[...Array(100)].map((_, i) => (
            <Typography key={i} paragraph>
              {i + 1}
            </Typography>
          ))}
        </Drawer>

        <Link underline="none" color="inherit" href="/chat/">
          <Typography
            noWrap
            component="div"
            sx={{
              fontFamily: `'Comfortaa', cursive`,
              color: "#00544f",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            MedCare
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default PrimaryAppBar
