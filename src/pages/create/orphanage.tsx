import dynamic from 'next/dynamic'
import { FormContainer } from '../../components/FormContainer'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { TitleForm } from '../../components/TitleGroup'
import { Container } from '../../styles/pages/CreateOrphanage'

export default function CreateOrphanage() {
  const MapWithNoSSR = dynamic(() => import('../../components/MapForm'), {
    ssr: false,
  })

  return (
    <Layout title="Criar orfanato">
      <Container>
        <Sidebar />

        <section>
          <h1>Adicione um orfanato</h1>

          <FormContainer onSubmit={() => console.log('THALLES')}>
            <TitleForm title="Dados" />

            <MapWithNoSSR />
          </FormContainer>
        </section>
      </Container>
    </Layout>
  )
}
