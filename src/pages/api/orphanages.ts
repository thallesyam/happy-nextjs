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
    const orphanages: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('orphanages'))),
        q.Lambda((x) => q.Get(x))
      )
    )

    return response.status(200).json({ orphanages })
  } catch (error) {
    console.log('Error: ', error)
  }
}
