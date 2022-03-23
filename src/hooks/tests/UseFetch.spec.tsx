import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from '../useFetch'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const orphanages = [
  {
    id: '1',
    name: 'Orf. Esperança',
    latitude: -23.6821604,
    longitude: -46.8754915,
  },
  {
    id: '2',
    name: 'Orf. Esperança 23',
    latitude: -23.6821604,
    longitude: -46.8754915,
  },
]

describe('Context component', () => {
  const server = setupServer(
    rest.get('/api/orphanages', (_, res, ctx) => {
      return res(ctx.json({ name: 'Thalles' }))
    })
  )

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should render correctly orphanages result', () => {
    const { result } = renderHook(() => useFetch({ link: '/orphanages' }))

    act(() => {
      result.current.fetchOrphanages()
    })
  })
})
