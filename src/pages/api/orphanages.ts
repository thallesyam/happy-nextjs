import { NextApiRequest, NextApiResponse } from 'next'

import { query as q } from 'faunadb'

import { fauna } from '../../service/fauna'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request

  if (method !== 'GET') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const orphanages = await fauna.query(
      q.Get(q.Ref(q.Collection('orphanages'), '326865203435143760'))
    )

    return response.status(200).json({ orphanages })
  } catch (error) {
    console.log('Error: ', error)
  }
}
