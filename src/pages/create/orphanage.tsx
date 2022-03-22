import dynamic from 'next/dynamic'
import { ChangeEvent, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from '../../components/Button'
import { FileInput } from '../../components/FileInput'
import { FormContainer } from '../../components/FormContainer'
import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { TitleForm } from '../../components/TitleGroup'
import { Container } from '../../styles/pages/CreateOrphanage'
import { LeafletMouseEvent } from 'leaflet'
import { api } from '../../service/api'

export type IPreviewImage = {
  name: string
  url: string
}

type CreateOrphanageFormData = {
  name: string
  about: string
  phone: string
  instruction: string
  hours: string
}

type IPositionMap = {
  latitude: number
  longitude: number
}

type IResponseAxios = {
  name: string
  about: string
  phone: string
  instruction: string
  images: File[]
  isOpenOnWeeks: boolean
  position: IPositionMap
}

type ICreateOrphanage = {
  onSubmitTest?: (data: CreateOrphanageFormData) => void
}

const createOrphanageFormSchema = yup.object().shape({
  about: yup.string().required('O campo sobre obrigatório'),
  name: yup.string().required('O campo nome é obrigatório'),
  phone: yup.string().required('O campo telefone é obrigatório'),
  instruction: yup.string().required('O campo instruções é obrigatório'),
  hours: yup.string().required('O campo horas é obrigatório'),
})

export default function CreateOrphanage({ onSubmitTest }: ICreateOrphanage) {
  const MapWithNoSSR = dynamic(() => import('../../components/MapForm'), {
    ssr: false,
  })
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createOrphanageFormSchema),
  })
  const { errors, isSubmitting } = formState

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<IPreviewImage[]>([])
  const [isOpenOnWeeks, setIsOpenOnWeeks] = useState(true)

  function handleClickOnConfirmButton() {
    setIsOpenOnWeeks(true)
  }

  function handleClickOnNegativeButton() {
    setIsOpenOnWeeks(false)
  }

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

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  const handleCreateOrphanage: SubmitHandler<CreateOrphanageFormData> = async (
    values
  ) => {
    const { name, about, hours, instruction, phone } = values
    const formData = new FormData()

    formData.append('name', name)
    formData.append('about', about)
    formData.append('hours', hours)
    formData.append('instruction', instruction)
    formData.append('phone', phone)
    formData.append('latitude', String(position.latitude))
    formData.append('longitude', String(position.longitude))
    formData.append('isOpenOnWeeks', String(isOpenOnWeeks))

    images.forEach((image) => {
      formData.append('file', image)
    })

    if (onSubmitTest) {
      const orphanage = {
        ...values,
        images,
        open_on_weekends: isOpenOnWeeks,
        position,
      }

      onSubmitTest(orphanage)
      return
    }

    const { data } = await api.post<IResponseAxios>(
      '/create/orphanage',
      formData
    )

    console.log(data)
  }

  return (
    <Layout title="Criar orfanato">
      <Container>
        <Sidebar />

        <section>
          <h1>Adicione um orfanato</h1>

          <FormContainer onSubmit={handleSubmit(handleCreateOrphanage)}>
            <TitleForm title="Dados" />

            <MapWithNoSSR handleMapClick={handleMapClick} position={position} />

            <Input
              error={errors.name}
              name="name"
              labelName="Nome"
              {...register('name')}
            />

            <Input
              error={errors.about}
              isTextArea
              name="about"
              height="7.5rem"
              labelName="Sobre"
              labelDescription="Máximo de 300 catacteres"
              maxLength={300}
              {...register('about')}
            />

            <Input
              notMaskedInput={false}
              error={errors.phone}
              name="phone"
              labelName="Número de Whatsapp"
              mask="(99) 99999-9999"
              maskChar=" "
              {...register('phone')}
            />

            <FileInput
              previewImages={previewImages}
              handleSelectImages={handleSelectImages}
              handleRemoveImage={handleRemoveImage}
            />

            <TitleForm title="Visitação" />

            <Input
              error={errors.instruction}
              isTextArea
              name="instruction"
              height="7.5rem"
              labelName="Instruções"
              maxLength={300}
              {...register('instruction')}
            />

            <Input
              notMaskedInput={false}
              error={errors.hours}
              name="hours"
              labelName="Horário das visitas"
              mask="D\as 99 às 99"
              maskChar=" "
              {...register('hours')}
            />

            <div className="boolean_container">
              <label>Atende fim de semana?</label>

              <div>
                <button
                  data-testid="afirmative-testid"
                  type="button"
                  onClick={handleClickOnConfirmButton}
                  className={`afirmative ${isOpenOnWeeks ? 'active' : ''}`}
                >
                  Sim
                </button>
                <button
                  data-testid="negative-testid"
                  type="button"
                  onClick={handleClickOnNegativeButton}
                  className={`negative ${!isOpenOnWeeks ? 'active' : ''}`}
                >
                  Não
                </button>
              </div>
            </div>

            <Button
              data-testid="submit-testid"
              width="548px"
              textHoverColor="#fff"
              bgColor="#37C77F"
              hover="#3EE08F"
              type="submit"
            >
              {isSubmitting ? 'Carregando...' : 'Confirmar'}
            </Button>
          </FormContainer>
        </section>
      </Container>
    </Layout>
  )
}
