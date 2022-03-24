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
})
