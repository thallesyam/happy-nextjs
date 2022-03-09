import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('should render correctly image link', () => {
    render(<Header />)

    screen.debug()

    const image = expect(screen.getByAltText('Logo Happy'))

    image.toBeInTheDocument()
  })
})
