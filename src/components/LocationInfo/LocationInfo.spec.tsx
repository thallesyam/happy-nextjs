import { render, screen } from '@testing-library/react'
import { LocationInfo } from '.'

describe('Logo component', () => {
  it('should render correctly text', () => {
    render(<LocationInfo />)

    expect(screen.getByText('Escolha um orfanato no mapa')).toBeInTheDocument()
    expect(
      screen.getByText('Muitas crianças estão esperando a sua visita :)')
    ).toBeInTheDocument()
  })
})
