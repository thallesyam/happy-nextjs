import { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'

import 'leaflet/dist/leaflet.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
