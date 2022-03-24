import axios from 'axios'

export const api = axios.create({
  baseURL: `https://happy-nextjs.vercel.app/api`,
})
