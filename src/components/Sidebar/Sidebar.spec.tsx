import { render, screen } from '@testing-library/react'
import { Sidebar } from '.'

describe('Sidebar component', () => {
  it('should render correctly button link', () => {
    render(<Sidebar />)

    const button = screen.queryByTestId('svg-testid').parentNode
    const link = expect(button.parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/location')
  })
})
