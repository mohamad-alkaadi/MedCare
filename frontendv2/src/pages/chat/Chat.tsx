import React from "react"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { createMuiTheme } from "./theme/theme"
import { ThemeProvider } from "@emotion/react"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/chat/" element={<Home />} />
      <Route path="/chat/explore/:categoryName" element={<Explore />} />
      {/* <Route path="/profile/" element={<Profile />} /> */}
    </Route>
  )
)
const Chat = () => {
  // this way allow us to simply put react router in the chat component
  // and when we change the url the router will swap components for us

  // without theme provider
  // return <RouterProvider router={Router} />
  const theme = createMuiTheme()
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />{" "}
      </ThemeProvider>
    </>
  )
}

export default Chat
