import { renderHook, act } from '@testing-library/react-hooks'
import { api } from '../../service/api'
import { useFetch } from '../useFetch'

jest.mock('../../service/api')

function getControlledPromise() {
  let deffered: any

  const promise: any = new Promise((resolve, reject) => {
    deffered = { resolve, reject }
  })

  return { deffered, promise }
}

describe('useFetch component', () => {
  it('should render correctly orphanages api link', async () => {
    api.get = jest.fn()

    await act(async () => renderHook(() => useFetch({ link: '/orphanages' })))

    expect(api.get).toBeCalledWith('/orphanages')
  })

  it('should render correctly orphanages reslt', async () => {
    const { deffered, promise } = getControlledPromise()

    api.get = jest.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ link: '/orphanages' })
    )

    deffered.resolve({
      data: () => ({
        orphanages: [],
      }),
    })

    await waitForNextUpdate()

    expect(result.current.orphanages).toBeTruthy()
  })
})
