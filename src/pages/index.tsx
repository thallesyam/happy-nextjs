import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { Container, Header } from '../styles/pages/Home'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Header>
          <section>
            <Link href="/">
              <a>
                <img src="/images/logo.svg" alt="Logo Happy" />
              </a>
            </Link>

            <div>
              <strong>Rio do Sul</strong>
              <p>Santa Catarina</p>
            </div>
          </section>

          <Link href="/admin/login" passHref prefetch>
            <a>
              <Button
                bgColor="#12D4E0"
                textHoverColor="#15C3D6"
                hover="#96FEFF"
                width="222px"
                height="3.5rem"
                fontSize="1.25rem"
              >
                Acesso Restrito
              </Button>
            </a>
          </Link>
        </Header>
      </Container>
    </Layout>
  )
}
