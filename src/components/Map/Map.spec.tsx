import { fireEvent, render, screen } from '@testing-library/react'
import Map from '.'

describe('Map component', () => {
  it('should redirect correctly link', () => {
    render(<Map />)

    const button = screen.queryByTestId('svg-plus-testid').parentNode
    const link = expect(button.parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/create/orphanage')
  })
})
