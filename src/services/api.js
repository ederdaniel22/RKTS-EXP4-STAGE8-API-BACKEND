import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-ho1j.onrender.com",
})
