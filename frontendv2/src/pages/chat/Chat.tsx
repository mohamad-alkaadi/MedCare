import React from "react"
import Home from "./pages/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/chat/" element={<Home />} />
    </Route>
  )
)
const Chat = () => {
  return <RouterProvider router={Router} />
}

export default Chat
