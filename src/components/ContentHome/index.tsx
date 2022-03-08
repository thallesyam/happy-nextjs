import { Button } from '../Button'
import { Container } from './styles'
import Link from 'next/link'

export function ContentHome() {
  return (
    <Container>
      <section className="text-section">
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </section>

      <section className="image-section">
        <img src="/images/kids-home.svg" alt="Kids Image" />

        <Link href="/map">
          <a>
            <Button
              width="5rem"
              height="5rem"
              bgColor="#FFD666"
              hover="#96FEFF"
              textHoverColor="#15C3D6"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="#8D734B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 6.66669L25.3333 16L16 25.3334"
                  stroke="#8D734B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </a>
        </Link>
      </section>
    </Container>
  )
}
