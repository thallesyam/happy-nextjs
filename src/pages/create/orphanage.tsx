import dynamic from 'next/dynamic'
import { ChangeEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { FileInput } from '../../components/FileInput'
import { FormContainer } from '../../components/FormContainer'
import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { TitleForm } from '../../components/TitleGroup'
import { Container } from '../../styles/pages/CreateOrphanage'

export type IPreviewImage = {
  name: string
  url: string
}

const initialButtonClass = {
  afirmativeClass: 'afirmative active',
  negativeClass: 'negative',
}

export default function CreateOrphanage() {
  const MapWithNoSSR = dynamic(() => import('../../components/MapForm'), {
    ssr: false,
  })
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<IPreviewImage[]>([])
  const [buttonClass, setButtonClass] = useState(initialButtonClass)

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    event.target.value = ''

    const allImages = [...images, ...selectedImages]

    setImages(allImages)

    const selectedPreviewImages = selectedImages.map((image) => {
      return {
        name: image.name,
        url: URL.createObjectURL(image),
      }
    })

    const allImagesPreview = [...previewImages, ...selectedPreviewImages]

    setPreviewImages(allImagesPreview)
  }

  function handleRemoveImage(image: IPreviewImage) {
    setPreviewImages(
      previewImages.map((image) => image).filter((img) => img.url !== image.url)
    )

    setImages(
      images.map((image) => image).filter((img) => img.name !== image.name)
    )
  }

  function handleClickOnConfirmButton() {
    setButtonClass({
      afirmativeClass: 'afirmative active',
      negativeClass: 'negative',
    })
  }

  function handleClickOnNegativeButton() {
    setButtonClass({
      afirmativeClass: 'afirmative',
      negativeClass: 'negative active',
    })
  }

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

            <FileInput
              previewImages={previewImages}
              handleSelectImages={handleSelectImages}
              handleRemoveImage={handleRemoveImage}
            />

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

              <div>
                <button
                  type="button"
                  onClick={handleClickOnConfirmButton}
                  className={buttonClass.afirmativeClass}
                >
                  Sim
                </button>
                <button
                  type="button"
                  onClick={handleClickOnNegativeButton}
                  className={buttonClass.negativeClass}
                >
                  Não
                </button>
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
