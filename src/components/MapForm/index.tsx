import { LeafletMouseEvent } from 'leaflet'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

import { Container } from './styles'

type IPosition = {
  latitude: number
  longitude: number
}

type IMapForm = {
  handleMapClick: (event: LeafletMouseEvent) => void
  position?: IPosition
}

function Map({ handleMapClick }: IMapForm) {
  useMapEvents({
    click: handleMapClick,
  })

  return null
}

export default function MapForm({ handleMapClick, position }: IMapForm) {
  return (
    <Container>
      <MapContainer
        center={[-23.54221, -46.47116]}
        style={{ width: '100%', height: 280 }}
        zoom={10}
        onclick={handleMapClick}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`}
        />

        {position.latitude !== 0 && (
          <Marker
            interactive={false}
            icon={mapIcon}
            position={[position.latitude, position.longitude]}
          />
        )}

        <Map handleMapClick={handleMapClick} />
      </MapContainer>

      <div className="map_info">
        <p>Clique no mapa para adicionar a localização</p>
      </div>
    </Container>
  )
}
