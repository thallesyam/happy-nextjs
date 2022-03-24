import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { HourSvg } from '../assets/HourSvg'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import { api } from '../service/api'
import { Container, WrapperInfo } from '../styles/pages/Orphanage'
import { InfoSvg } from '../assets/InfoSvg'
import { Button } from '../components/Button'
import Link from 'next/link'
import { AlertSvg } from '../assets/AlertSvg'

type IImage = {
  url: string
  name: string
}

type IOrphanageResponse = {
  id: string
  name: string
  about: string
  phone: string
  hours: string
  instruction: string
  images: IImage[]
  isOpenOnWeeks: boolean
  latitude: number
  longitude: number
}

type IOrphanage = {
  orphanage: IOrphanageResponse
}

export default function Orhphanage({ orphanage }: IOrphanage) {
  const MapWithNoSSR = dynamic(() => import('../components/MapOrphanagePage'), {
    ssr: false,
  })

  const images = orphanage.images.slice(0, orphanage.images.length)
  const [ddd, number] = orphanage.phone.split(' ')
  const formatedDDD = ddd.replace('(', '').replace(')', '')
  const phone = `55${formatedDDD}${number.replace('-', '')}`

  const link = `https://api.whatsapp.com/send?phone=${phone}&text=Agendar%20hor%C3%A1rio%20de%20visita%20ao%20orfanato`

  return (
    <Layout title="Criar orfanato">
      <Container>
        <Sidebar />

        <section>
          <div className="title">
            <Link href="/location">
              <a>
                <svg
                  data-testid="svg-testid"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12L5 12"
                    stroke="#8FA7B2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 4.99999"
                    stroke="#8FA7B2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>

            <h1>Orfanato</h1>
          </div>

          <WrapperInfo>
            <img
              src={orphanage?.images[0].url}
              alt={orphanage?.images[0].name}
            />

            <div>
              <h1>{orphanage?.name}</h1>

              <p>{orphanage?.about}</p>

              {images.map((image) => {
                return (
                  <div key={image.url}>
                    <img src={image.url} alt={image.name} />
                  </div>
                )
              })}

              <MapWithNoSSR orphanage={orphanage} />

              <div className="line" />

              <h2>Instruções para visita</h2>

              <p className="instructions">{orphanage?.instruction}</p>

              <div className="cards_info">
                <div className="hours">
                  <HourSvg />
                  <p>Horário de visitas {orphanage?.hours}</p>
                </div>
                <div className={`openWeeks ${orphanage?.isOpenOnWeeks}`}>
                  {orphanage?.isOpenOnWeeks ? (
                    <>
                      <InfoSvg />
                      <p>Atendemos fim de semana</p>
                    </>
                  ) : (
                    <>
                      <AlertSvg />
                      <p>Não atendemos fim de semana</p>
                    </>
                  )}
                </div>
              </div>

              <Link href={link} passHref>
                <a className="link-wpp" target="_blank">
                  <Button
                    data-testid="submit-testid"
                    width="548px"
                    textHoverColor="#fff"
                    bgColor="#37C77F"
                    hover="#3EE08F"
                    type="submit"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M15.8211 14.1212C15.5798 14.8025 14.6223 15.3675 13.8586 15.5325C13.3361 15.6437 12.6536 15.7325 10.3561 14.78C7.41732 13.5625 5.52482 10.5762 5.37732 10.3825C5.23607 10.1887 4.18982 8.80123 4.18982 7.36623C4.18982 5.93123 4.91857 5.23248 5.21232 4.93248C5.45357 4.68623 5.85232 4.57373 6.23482 4.57373C6.35857 4.57373 6.46982 4.57998 6.56982 4.58498C6.86357 4.59748 7.01107 4.61498 7.20482 5.07873C7.44607 5.65998 8.03357 7.09498 8.10357 7.24248C8.17482 7.38998 8.24607 7.58998 8.14607 7.78373C8.05232 7.98373 7.96982 8.07248 7.82232 8.24248C7.67482 8.41248 7.53482 8.54248 7.38732 8.72498C7.25232 8.88373 7.09982 9.05373 7.26982 9.34748C7.43982 9.63498 8.02732 10.5937 8.89232 11.3637C10.0086 12.3575 10.9136 12.675 11.2373 12.81C11.4786 12.91 11.7661 12.8862 11.9423 12.6987C12.1661 12.4575 12.4423 12.0575 12.7236 11.6637C12.9236 11.3812 13.1761 11.3462 13.4411 11.4462C13.7111 11.54 15.1398 12.2462 15.4336 12.3925C15.7273 12.54 15.9211 12.61 15.9923 12.7337C16.0623 12.8575 16.0623 13.4387 15.8211 14.1212Z"
                        fill="#FAFAFA"
                      />
                    </svg>

                    <p>Entrar em contato</p>
                  </Button>
                </a>
              </Link>
            </div>
          </WrapperInfo>
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
