import { render, screen } from '@testing-library/react'
import { Logo } from '.'

describe('Logo component', () => {
  it('should render correctly logo link', () => {
    render(<Logo />)

    const image = screen.queryByAltText('Logo Happy')
    const link = expect(image.parentNode)

    expect(image).toBeInTheDocument()
    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/')
  })
})
