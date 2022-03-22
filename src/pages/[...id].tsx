import { GetStaticProps } from 'next'
import { FormContainer } from '../components/FormContainer'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import { api } from '../service/api'
import { Container } from '../styles/pages/Orphanage'

type IPositionMap = {
  latitude: number
  longitude: number
}

type IImage = {
  url: string
  name: string
}

type IOrphanageResponse = {
  id: string
  name: string
  about: string
  phone: string
  instruction: string
  images: IImage[]
  isOpenOnWeeks: boolean
  position: IPositionMap
}

type IOrphanage = {
  orphanage: IOrphanageResponse
}

export default function Orhphanage({ orphanage }: IOrphanage) {
  return (
    <Layout title="Criar orfanato">
      <Container>
        <Sidebar />

        <section>
          <h1>Adicione um orfanato</h1>

          <FormContainer>{orphanage.name}</FormContainer>
        </section>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const {
    data: { orphanage },
  } = await api.get(`/orphanage?id=${id[1]}`)

  return {
    props: {
      orphanage: orphanage.data,
    },
    revalidate: 60 * 30, // 30 minutos
  }
}
