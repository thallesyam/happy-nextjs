import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import MapForm from '.'

describe('MapForm component', () => {
  const onSubmitTest = jest.fn()

  beforeEach(() => {
    onSubmitTest.mockClear()
  })

  it('should render correctly clicked map', async () => {
    const position = {
      latitude: 0,
      longitude: 0,
    }

    const { container } = render(
      <MapForm handleMapClick={onSubmitTest} position={position} />
    )

    await act(async () => {
      const map = container.getElementsByClassName(
        'leaflet-container leaflet-grab leaflet-touch-drag'
      )[0]

      fireEvent.click(map)

      await waitFor(() => {
        expect(onSubmitTest).toBeCalledTimes(1)
      })
    })
  })

  it('should render position marker on map', async () => {
    const position = {
      latitude: -23.54221,
      longitude: -46.47116,
    }

    const { container } = render(
      <MapForm handleMapClick={onSubmitTest} position={position} />
    )

    const map = container.getElementsByClassName(
      'leaflet-marker-icon leaflet-zoom-hide'
    )[0]

    expect(map).toBeInTheDocument()
  })

  it('not should render position marker on map', async () => {
    const position = {
      latitude: 0,
      longitude: 0,
    }

    const { container } = render(
      <MapForm handleMapClick={onSubmitTest} position={position} />
    )

    const map = container.getElementsByClassName(
      'leaflet-marker-icon leaflet-zoom-hide'
    )[0]

    expect(map).toBeUndefined()
  })
})
