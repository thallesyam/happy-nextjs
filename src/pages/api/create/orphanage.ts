import { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error'
import fs from 'fs'
import formidable, { File } from 'formidable'
import { query as q } from 'faunadb'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

import { fauna } from '../../../service/fauna'
import '../../../service/cloudinary'
import cloudinary from 'cloudinary/cloudinary'

type IImageUpload = {
  secure_url: string
  original_filename: string
}

type IImage = {
  url: string
  name: string
}

type IResponseAxios = {
  id: string
  name: string | string[]
  about: string | string[]
  phone: string | string[]
  instruction: string | string[]
  images: IImage[]
  isOpenOnWeeks: string | string[]
  hours: string | string[]
  latitude: string | string[]
  longitude: string | string[]
  createdAt: number
  updatedAt: number
}

export const config = {
  api: {
    bodyParser: false,
  },
}

async function uploadImageToCloud(file: File): Promise<IImageUpload> {
  const image = cloudinary.v2.uploader.upload(
    `./public/upload/${file.originalFilename}`,
    (error: Error, result: IImageUpload) => {
      if (!!error) {
        console.log('Image error: ', error)
      }

      return result
    }
  )

  return await image
}

async function saveFile(files: File[]) {
  const receivedFiles = files?.length > 1 ? files : Array(files)

  const images = await Promise.all(
    receivedFiles.map(async (file) => {
      const data = fs.readFileSync(file.filepath)

      fs.writeFileSync(`./public/upload/${file.originalFilename}`, data)

      const image = await uploadImageToCloud(file)

      fs.unlink(`./public/upload/${file.originalFilename}`, (err) => {
        console.log(`./public/upload/${file.originalFilename}`)
      })

      return {
        url: image.secure_url,
        name: image.original_filename,
      }
    })
  )

  return images
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request

  if (method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const form = new formidable.IncomingForm({
      multiples: true,
    })

    form.parse(request, async function (err, fields, files: any) {
      const images = await saveFile(files.file)

      const {
        name,
        about,
        phone,
        hours,
        instruction,
        isOpenOnWeeks,
        latitude,
        longitude,
      } = fields

      console.log(fields)

      const data: IResponseAxios = {
        id: uuid(),
        name,
        about,
        phone,
        hours,
        instruction,
        isOpenOnWeeks,
        latitude,
        longitude,
        // images,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      }

      const orphanage = await fauna.query(
        q.If(
          q.Not(q.Exists(q.Match(q.Index('orphanage_by_name'), data.name))),
          q.Create(q.Collection('orphanages'), { data }),
          null
        )
      )

      return response.status(200).json({ orphanage })
    })
  } catch (err) {
    return response.status(500).json({ mgs: err })
  }
}
