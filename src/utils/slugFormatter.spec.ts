import { slugFormatter } from './slugFormatter'

describe('Slug Function', () => {
  it('should conver correctly string to slug', () => {
    const name = 'Orf. Esperança'
    const mock = jest.fn().mockImplementation(slugFormatter)

    const slug = mock(name)

    expect(mock).toHaveBeenCalled()
    expect(slug).toBe('orf-esperanca')
  })
})
