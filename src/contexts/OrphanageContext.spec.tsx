import { render, screen } from '@testing-library/react'
import { OrphanageContext, OrphanageProvider } from './OrphanageContext'

const orphanages = [
  {
    id: '1',
    name: 'Orf. Esperança',
    latitude: -23.6821604,
    longitude: -46.8754915,
  },
  {
    id: '2',
    name: 'Orf. Esperança 23',
    latitude: -23.6821604,
    longitude: -46.8754915,
  },
]

function RenderContextOrphanage(orphanages) {
  return (
    <OrphanageContext.Provider value={orphanages}>
      {orphanages.map((orphanage) => {
        return <p key={orphanage.id}>{orphanage.name}</p>
      })}
    </OrphanageContext.Provider>
  )
}

describe('Context component', () => {
  it('should render correctly orphanage element', () => {
    render(RenderContextOrphanage(orphanages))

    orphanages.map((orphanage) => {
      expect(screen.getByText(orphanage.name))
    })
  })

  it('should check orphanages is not undefined', () => {
    render(RenderContextOrphanage(orphanages))

    expect(!!orphanages).toBe(true)
  })

  it('should render correctly orphanage children', () => {
    render(<OrphanageProvider>fake-children</OrphanageProvider>)

    expect(screen.getByText('fake-children'))
  })

  it('should render correctly orphanages data after useEffect', () => {
    const orphanagesInitial = []

    const { rerender } = render(
      <OrphanageContext.Provider value={{ orphanages: orphanagesInitial }}>
        {orphanages.map((orphanage) => {
          return <p key={orphanage.id}>{orphanage.name}</p>
        })}
      </OrphanageContext.Provider>
    )

    expect(screen.queryByText('Orf.Esperança')).not.toBeInTheDocument()

    rerender(
      <OrphanageContext.Provider value={{ orphanages }}>
        <p key={orphanages[0].id}>{orphanages[0].name}</p>
      </OrphanageContext.Provider>
    )

    expect(screen.queryByText('Orf. Esperança')).toBeInTheDocument()
  })
})
