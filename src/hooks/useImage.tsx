import { ChangeEvent, useState } from 'react'
import { IPreviewImage } from '../pages/create/orphanage'

export function useImage() {
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<IPreviewImage[]>([])

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

  return {
    images,
    previewImages,
    handleSelectImages,
    handleRemoveImage,
  }
}
