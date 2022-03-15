import { FormContainer } from '../../components/FormContainer'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { Container } from '../../styles/pages/CreateOrphanage'

export default function CreateOrphanage() {
  return (
    <Layout title="Criar orfanato">
      <Container>
        <Sidebar />

        <section>
          <h1>Adicione um orfanato</h1>
          <FormContainer>
            <h1>Thalles</h1>
          </FormContainer>
        </section>
      </Container>
    </Layout>
  )
}
