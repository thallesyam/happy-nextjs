import { useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

import { Container } from './styles'

export default function MapForm() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleMapClick() {
    console.log('handleMapClick')
  }

  return (
    <Container>
      <MapContainer
        center={[-23.6821604, -46.8754915]}
        style={{ width: '100%', height: 280 }}
        zoom={15}
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
      </MapContainer>
      <div className="map_info">
        <p>Clique no mapa para adicionar a localização</p>
      </div>
    </Container>
  )
}
