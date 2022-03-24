import axios from 'axios'

export const api = axios.create({
  // http://localhost:3000 - To dev workspace
  baseURL: `https://happy-nextjs.vercel.app/api`,
})
