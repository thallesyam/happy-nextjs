import { render, screen } from '@testing-library/react'
import { ContentHome } from '.'

describe('ContentHome component', () => {
  it('should render correctly texts', () => {
    render(<ContentHome />)

    expect(screen.getByText('Leve felicidade para o mundo')).toBeInTheDocument()
    expect(
      screen.getByText('Visite orfanatos e mude o dia de muitas crianças.')
    ).toBeInTheDocument()
  })

  it('should render correctly image alt', () => {
    render(<ContentHome />)

    expect(screen.getByAltText('Kids Image')).toBeInTheDocument()
  })

  it('should render correctly button link', () => {
    render(<ContentHome />)

    const button = screen.queryByTestId('svg-testid').parentNode
    const link = expect(button.parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/location')
  })
})
