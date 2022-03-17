import { ChangeEvent } from 'react'
import { IPreviewImage } from '../../pages/create/orphanage'
import { Container, LabelNewImage, ImageContainer } from './styles'

type IFileInput = {
  previewImages: IPreviewImage[]
  handleRemoveImage: (image: IPreviewImage) => void
  handleSelectImages: (event: ChangeEvent<HTMLInputElement>) => void
}

export function FileInput({
  previewImages,
  handleRemoveImage,
  handleSelectImages,
}: IFileInput) {
  const theme = {
    grid: previewImages.length > 0,
  }

  return (
    <Container>
      <label htmlFor="images">Fotos</label>

      <ImageContainer theme={theme}>
        {previewImages.map((image) => {
          return (
            <div key={image.url}>
              <span
                className="remove-image"
                onClick={() => handleRemoveImage(image)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#FF669D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#FF669D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <img src={image.url} alt={'name'} className="new-image" />
            </div>
          )
        })}

        <LabelNewImage htmlFor="image[]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1047 7.10465C15.3624 7.10465 15.5727 7.19283 15.7355 7.36919C15.9118 7.53198 16 7.74225 16 8C16 8.25775 15.9118 8.47481 15.7355 8.65116C15.5727 8.81395 15.3624 8.89535 15.1047 8.89535H8.89535V15.0843C8.89535 15.3421 8.80717 15.5591 8.63081 15.7355C8.46802 15.9118 8.25775 16 8 16C7.74225 16 7.52519 15.9118 7.34884 15.7355C7.18605 15.5591 7.10465 15.3421 7.10465 15.0843V8.89535H0.895349C0.637597 8.89535 0.420543 8.81395 0.244186 8.65116C0.0813953 8.47481 0 8.25775 0 8C0 7.74225 0.0813953 7.53198 0.244186 7.36919C0.420543 7.19283 0.637597 7.10465 0.895349 7.10465H7.10465V0.895349C7.10465 0.637597 7.18605 0.427326 7.34884 0.264535C7.52519 0.0881784 7.74225 0 8 0C8.25775 0 8.46802 0.0881784 8.63081 0.264535C8.80717 0.427326 8.89535 0.637597 8.89535 0.895349V7.10465H15.1047Z"
              fill="url(#paint0_linear_48794_763)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_48794_763"
                x1="16"
                y1="16"
                x2="4.89685"
                y2="-2.87982"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#15B6D6" />
                <stop offset="1" stopColor="#15D6D6" />
              </linearGradient>
            </defs>
          </svg>
        </LabelNewImage>
      </ImageContainer>

      <input
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        onChange={handleSelectImages}
        id="image[]"
      />
    </Container>
  )
}