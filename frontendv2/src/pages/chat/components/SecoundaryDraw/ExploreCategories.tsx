import React, { useEffect } from "react"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Box,
  useTheme,
  ListItemIcon,
  Typography,
} from "@mui/material"
import useCrud from "../../../../hooks/useCrud"
import { Link } from "react-router-dom"
import { MEDIA_URL } from "../../../../config"

interface Category {
  id: number
  name: string
  description: string
  icon: string
}

const ExploreCategories = () => {
  const theme = useTheme()
  const { dataCRUD, error, isLoading, fetchData } = useCrud<Category>(
    [],
    "/server/select/"
  )
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          px: 2,
          borderBottom: `1px solid ${theme.palette.divider} `,
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        Explore
      </Box>
      <List sx={{ py: 0 }}>
        {dataCRUD.map((item) => (
          <ListItem
            disablePadding
            key={item.id}
            sx={{ display: "block" }}
            dense={true}
          >
            <Link
              to={`/explore/${item.name}`}
              style={{ textDecoration: "none", color: "inheret" }}
            >
              <ListItemButton sx={{ minHeight: 48 }}>
                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                  <ListItemAvatar sx={{ minHeight: "0px" }}>
                    <img
                      alt="server Icon"
                      src={`${MEDIA_URL}${item.icon}`}
                      style={{
                        width: "25px",
                        height: "25px",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      paddingLeft={1}
                      sx={{ color: "black" }}
                    >
                      {item.name}
                    </Typography>
                  }
                ></ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ExploreCategories
