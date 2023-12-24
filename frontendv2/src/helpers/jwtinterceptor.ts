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
    async (error) => {}
  )
  return jwtAxios
}

export default useAxiosWithInterceptor
