import { NextApiRequest, NextApiResponse } from 'next'

import { query as q } from 'faunadb'

import { fauna } from '../../service/fauna'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method, query } = request

  if (method !== 'GET') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const orphanage = await fauna.query(
      q.Get(q.Match(q.Index('orphanage_by_id'), query.id))
    )

    return response.status(200).json({ orphanage })
  } catch (error) {
    console.log('Error: ', error)
    return response.status(200)
  }
}
