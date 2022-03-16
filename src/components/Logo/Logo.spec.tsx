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

  it('should render correctly logo url', () => {
    render(<Logo canShowText={false} isSmallerLogo={true} />)

    const image = screen.queryByAltText('Logo Happy')

    expect(image).toHaveAttribute('src', '/images/happy-icon-small.svg')
  })
})
