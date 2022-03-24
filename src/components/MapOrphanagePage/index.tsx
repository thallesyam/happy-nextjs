import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

import { Container } from './styles'
import Link from 'next/link'

type IOrphanageProps = {
  id: string

  latitude: number
  longitude: number
}

type IMapOrphanagePage = {
  orphanage: IOrphanageProps
}

export default function MapOrphanagePage({ orphanage }: IMapOrphanagePage) {
  return (
    <Container>
      <MapContainer
        center={[-23.54221, -46.47116]}
        style={{ width: '100%', height: 280 }}
        zoom={10}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`}
        />

        <Marker
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
        >
          <div key={orphanage.id} data-testid="popup-testid">
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            />
          </div>
        </Marker>
      </MapContainer>

      <div className="map_info">
        <Link href="https://www.google.com.br/maps">
          <a target="_blank">
            <p>Ver rotas no Google Maps</p>
          </a>
        </Link>
      </div>
    </Container>
  )
}
