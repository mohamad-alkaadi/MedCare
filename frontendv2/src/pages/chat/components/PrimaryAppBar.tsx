import { AppBar, Link, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/material/styles"

const PrimaryAppBar = () => {
  const theme = useTheme()

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar.height,
          minHeight: theme.primaryAppBar.height,
        }}
      >
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
