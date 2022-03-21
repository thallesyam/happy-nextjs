// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

type IPositionMap = {
  latitude: number
  longitude: number
}

type IRequestAxios = {
  name: string
  about: string
  phone: string
  instruction: string
  images: File[]
  buttonClass: boolean
  position: IPositionMap
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request

  if (method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  const {
    name,
    position,
    hours,
    about,
    instruction,
    images,
    open_on_weekends,
  } = request.body

  console.log({
    name,
    position,
    hours,
    about,
    instruction,
    images,
    open_on_weekends,
  })
}
