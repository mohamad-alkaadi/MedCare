import { Box, Typography } from "@mui/material"
import React, { ReactNode } from "react"
import { useTheme } from "@mui/material/styles"

type Props = {
  children: ReactNode
}
const Main: React.FC<Props> = ({ children }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
        mt: `${theme.primaryAppBar.height}px`,
        overflow: "hidden",
      }}
    >
      {/* {[...Array(50)].map((_, i) => (
        <Typography key={i} paragraph>
          {i + 1}
        </Typography>
      ))} */}
      {children}
    </Box>
  )
}

export default Main
