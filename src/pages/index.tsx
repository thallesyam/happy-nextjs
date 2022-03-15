import { motion } from 'framer-motion'

import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { ContentHome } from '../components/ContentHome'
import { Container, Wrapper } from '../styles/pages/Home'

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <motion.div
          className="wrapper-logo-happy"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 1.5, repeat: 1, repeatType: 'reverse' }}
        >
          <img src="/images/happy-icon.svg" alt="Logo happy" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <Wrapper>
            <Header />

            <ContentHome />
          </Wrapper>
        </motion.div>
      </Container>
    </Layout>
  )
}
