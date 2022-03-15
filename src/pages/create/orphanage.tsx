import dynamic from 'next/dynamic'
import { Button } from '../../components/Button'
import { FileInput } from '../../components/FileInput'
import { FormContainer } from '../../components/FormContainer'
import { Input } from '../../components/Input'
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

            <Input name="name" labelName="Nome" />

            <Input
              isTextArea
              name="about"
              height="7.5rem"
              labelName="Sobre"
              labelDescription="Máximo de 300 catacteres"
              maxLength={300}
            />

            <Input name="phone" labelName="Número de Whatsapp" type="number" />

            <FileInput />

            <TitleForm title="Visitação" />

            <Input
              isTextArea
              name="instruction"
              height="7.5rem"
              labelName="Instruções"
              maxLength={300}
            />

            <Input name="hours" labelName="Horário das visitas" />

            <div className="boolean_container">
              <label>Atende fim de semana?</label>

              <div className="boolean_container_buttons">
                <button className={`afirmative active`}>Sim</button>
                <button className={`negative`}>Não</button>
              </div>
            </div>

            <Button
              width="548px"
              textHoverColor="#fff"
              bgColor="#37C77F"
              hover="#3EE08F"
              disabled
            >
              Confirmar
            </Button>
          </FormContainer>
        </section>
      </Container>
    </Layout>
  )
}
