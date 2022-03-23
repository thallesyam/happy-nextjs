import { render, screen } from '@testing-library/react'

import { OrphanageContext } from '../../contexts/OrphanageContext'
import Map from '.'

const orphanages = [
  {
    id: 'b6e2d350-f384-44b4-ac2d-f8334acdfe84',
    name: 'Orfanato Esperança',
    latitude: -23.535976332684992,
    longitude: -46.602115631103516,
  },
]

describe('Map component', () => {
  it('should redirect correctly link', () => {
    render(<Map />)

    const button = screen.queryByTestId('svg-plus-testid').parentNode
    const link = expect(button.parentNode)

    link.toBeInTheDocument()
    link.toHaveAttribute('href', '/create/orphanage')
  })

  it('not should render map marker', async () => {
    function RenderContextOrphanage() {
      return (
        <OrphanageContext.Provider value={{ orphanages }}>
          <Map />
        </OrphanageContext.Provider>
      )
    }

    render(RenderContextOrphanage())
    expect(screen.queryByTestId('popup-testid')).toBeInTheDocument()
  })
})
