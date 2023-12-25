import axios, { AxiosInstance } from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../config"

const API_BASE_URL = BASE_URL

const useAxiosWithInterceptor = (): AxiosInstance => {
  // instance of axios
  const jwtAxios = axios.create({ baseURL: API_BASE_URL })
  //   setup navigation when we need it
  const navigate = useNavigate()
  jwtAxios.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      // we can use the originalRequest to retry a second time to request something from the server
      const originalRequest = error.config
      if (error.response?.status === 403) {
        // redirect to home page
        const goRoot = () => navigate("/error")
        goRoot()
      }
      throw error
    }
  )
  return jwtAxios
}

export default useAxiosWithInterceptor
