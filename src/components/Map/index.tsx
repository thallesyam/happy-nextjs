import Link from 'next/link'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

const url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`

export default function Map() {
  const orphanage = {
    name: 'TesteName',
    latitude: -23.6821604,
    longitude: -46.8754915,
  }

  return (
    <section id="page-map">
      <MapContainer
        center={[-23.6821604, -46.8754915]}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={url} />

        <Marker
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            {orphanage.name}

            <Link href={`/orphanages/${orphanage.name}`}>button</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}
