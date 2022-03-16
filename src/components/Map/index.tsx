import Link from 'next/link'
import { Container } from './styles'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'
import { Button } from '../Button'
import { useOrphanageContext } from '../../contexts/OrphanageContext'
import { PopupLink } from '../PopupLink'

const url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`

export default function Map() {
  const { orphanages } = useOrphanageContext()

  return (
    <Container>
      <MapContainer
        center={[-23.54221, -46.47116]}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={url} />

        <Marker icon={mapIcon} position={[-23.54221, -46.47116]}>
          {orphanages?.map((orphanage) => (
            <Popup
              key={orphanage.id}
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <PopupLink orphanage={orphanage} />
            </Popup>
          ))}
        </Marker>

        <Link href="/create/orphanage" passHref>
          <a className="link-add-orphanage">
            <Button
              width="64px"
              height="64px"
              bgColor="#15C3D6"
              hover="#17D6EB"
              textHoverColor="#15C3D6"
            >
              <svg
                data-testid="svg-plus-testid"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 0C9.67157 0 9 0.671573 9 1.5V9H1.5C0.671573 9 0 9.67157 0 10.5C0 11.3284 0.671573 12 1.5 12H9V19.5C9 20.3284 9.67157 21 10.5 21C11.3284 21 12 20.3284 12 19.5V12H19.5C20.3284 12 21 11.3284 21 10.5C21 9.67157 20.3284 9 19.5 9H12V1.5C12 0.671573 11.3284 0 10.5 0Z"
                  fill="white"
                />
              </svg>
            </Button>
          </a>
        </Link>
      </MapContainer>
    </Container>
  )
}
