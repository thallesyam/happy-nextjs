import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

import { Layout } from '../components/Layout'
import { LocationInfo } from '../components/LocationInfo'
import { Container } from '../styles/pages/Location'

export default function Location() {
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  })

  return (
    <Layout title="Encontre um orfanato">
      <Container>
        <LocationInfo />
        <MapWithNoSSR />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}
