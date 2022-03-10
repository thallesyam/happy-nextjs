import { Location } from '../Location'
import { Logo } from '../Logo'
import { Container } from './styles'

export function LocationInfo() {
  return (
    <Container>
      <Logo canShowText={false} />

      <div className="container-text">
        <h1>
          Escolha <br /> um orfanato no mapa
        </h1>

        <p>Muitas crianças estão esperando a sua visita {':)'}</p>
      </div>

      <Location />
    </Container>
  )
}
