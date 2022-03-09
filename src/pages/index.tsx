import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { ContentHome } from '../components/ContentHome'
import { Container, Wrapper } from '../styles/pages/Home'

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Wrapper>
          <Header />

          <ContentHome />
        </Wrapper>
      </Container>
    </Layout>
  )
}
