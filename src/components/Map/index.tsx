import Link from 'next/link'
import { Container } from './styles'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'
import { Button } from '../Button'
import { useOrphanageContext } from '../../contexts/OrphanageContext'

const url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`

export default function Map() {
  const { orphanages } = useOrphanageContext()

  return (
    <Container>
      <MapContainer
        center={[-23.6821604, -46.8754915]}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={url} />

        <Marker icon={mapIcon} position={[-23.6821604, -46.8754915]}>
          {orphanages.map((orphanage) => (
            <Popup
              key={orphanage.id}
              data-testid="marker-testid"
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <p>{orphanage.name}</p>

              <Link href={`/orphanage/${orphanage.name}`}>
                <a>
                  <Button
                    width="40px"
                    height="40px"
                    bgColor="#15C3D6"
                    hover="#96FEFF"
                    textHoverColor="#15C3D6"
                    radius="0.75rem"
                  >
                    <svg
                      data-testid="svg-arrow-testid"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10H15.8334"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.16675L15.8333 10.0001L10 15.8334"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </a>
              </Link>
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
