import Link from 'next/link'
import { slugFormatter } from '../../utils/slugFormatter'
import { Button } from '../Button'
import { Container } from './styles'

type IOrphanage = {
  id: string
  name: string
  latitude: number
  longitude: number
}

type IPopupLink = {
  orphanage: IOrphanage
}

export function PopupLink({ orphanage }: IPopupLink) {
  return (
    <Container>
      <p>{orphanage.name}</p>
      <Link
        href={`/orphanage/${slugFormatter(orphanage.name)}`}
        as={`/orphanage/${orphanage.id}`}
      >
        <a data-testid="link-testid">
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
    </Container>
  )
}
