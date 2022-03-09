import { render, screen } from '@testing-library/react'
import { Location } from '.'

describe('Location component', () => {
  it('should render correctly texts', () => {
    render(<Location />)

    const state = screen.queryByTestId('state-testid')
    const city = screen.queryByTestId('city-testid')

    expect(state.textContent).toBe('São Paulo')
    expect(city.textContent).toBe('São Paulo')
  })
})
