import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Header />
      </Container>
    </Layout>
  )
}
