import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('should render correctly image link', () => {
    render(<Header />)

    const image = screen.queryByAltText('Logo Happy')
    const link = expect(image.parentNode)

    expect(image).toBeInTheDocument()
    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/')
  })

  it('should render correctly button link', () => {
    render(<Header />)

    const link = expect(screen.queryByText('Acesso Restrito').parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/admin/login')
  })
})
