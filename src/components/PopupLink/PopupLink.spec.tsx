import { render, screen } from '@testing-library/react'
import { PopupLink } from '.'

const orphanage = {
  id: '1',
  name: 'Orf. Esperança',
  latitude: -23.6821604,
  longitude: -46.8754915,
}

describe('PopupLink component', () => {
  it('should render correctly orphanage props', () => {
    render(<PopupLink orphanage={orphanage} />)

    const link = expect(screen.queryByTestId('link-testid'))

    expect(screen.getByText(orphanage.name))

    link.toHaveAttribute('href', `/orphanage/1`)
  })
})
