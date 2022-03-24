import { GetServerSideProps } from 'next'
import Link from 'next/link'
import nookies from 'nookies'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { Container } from '../styles/pages/Success'

export default function Success() {
  return (
    <Layout title="Sucesso">
      <Container>
        <div>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado <br /> ao administrador para ser
            aprovado. <br />
            Agora é só esperar {':)'}
          </p>

          <Link href="/location" passHref>
            <a>
              <Button
                bgColor="#31B272"
                textHoverColor="#fff"
                hover="#3BD689"
                width="243px"
                height="4rem"
                fontSize="18px"
              >
                Voltar para o mapa
              </Button>
            </a>
          </Link>
        </div>

        <div>
          <img src="/images/success-icon.png" alt="Success" />
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = nookies.get(context)

  if (!!!cookie['@sucessCookie']) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }

  return {
    props: {},
  }
}
