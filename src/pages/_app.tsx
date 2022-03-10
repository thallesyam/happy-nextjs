import { AppProps } from 'next/app'
import { OrphanageProvider } from '../contexts/OrphanageContext'

import { GlobalStyle } from '../styles/globals'

import 'leaflet/dist/leaflet.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrphanageProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </OrphanageProvider>
  )
}

export default MyApp
