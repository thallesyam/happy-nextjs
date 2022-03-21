import { render, screen } from '@testing-library/react'

import { OrphanageProvider } from '../../contexts/OrphanageContext'
import Map from '.'

describe('Map component', () => {
  it('should redirect correctly link', () => {
    render(<Map />)

    const button = screen.queryByTestId('svg-plus-testid').parentNode
    const link = expect(button.parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/create/orphanage')
  })

  it('should render correctly map marker', async () => {
    function RenderContextOrphanage() {
      return (
        <OrphanageProvider>
          <Map />
        </OrphanageProvider>
      )
    }

    render(RenderContextOrphanage())

    expect(screen.queryByTestId('popup-testid')).toBeInTheDocument()
  })
})
