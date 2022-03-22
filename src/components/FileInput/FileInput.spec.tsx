import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'
import { ChangeEvent } from 'react'
import { FileInput } from '.'

describe('FileInput component', () => {
  const previewImages = [
    {
      name: 'eu-hopi.jpeg',
      url: 'blob:http://localhost:3000/00dbd3b4-0786-40ca-8516-d75ecd6f19b7',
    },
    {
      name: 'eu-lapa.jpeg',
      url: 'blob:http://localhost:3000/1510683b-1c52-4eee-9ff3-6c749e2eee1f',
    },
    {
      name: 'minhafoto.jpg',
      url: 'blob:http://localhost:3000/f6a31bd6-4c90-4d06-b886-719dc96243b4',
    },
  ]

  const handleRemoveImage = jest.fn().mockImplementation((image) => {
    return previewImages.filter((img) => {
      return img.name !== image.name
    })
  })

  const handleSelectImages = jest
    .fn()
    .mockImplementation((event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return undefined
      }

      const selectedImages = Array.from(event.target.files)

      const selectedPreviewImages = selectedImages.map((image) => {
        return {
          name: image.name,
          url: URL.createObjectURL(image),
        }
      })

      previewImages.push(...selectedPreviewImages)
    })

  beforeEach(() => {
    handleRemoveImage.mockClear()
    handleSelectImages.mockClear()
  })

  it('should render correctly button link', () => {
    const { container } = render(
      <FileInput
        previewImages={previewImages}
        handleSelectImages={handleSelectImages}
        handleRemoveImage={handleRemoveImage}
      />
    )

    const image = container.getElementsByClassName('new-image')[0]

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'eu-hopi.jpeg')
  })

  it('should render two images preview', async () => {
    const { container } = render(
      <FileInput
        previewImages={previewImages}
        handleSelectImages={handleSelectImages}
        handleRemoveImage={handleRemoveImage}
      />
    )

    const button = container.getElementsByClassName('remove-image')[0]

    fireEvent.click(button)

    await waitFor(() => {
      expect(handleRemoveImage).toBeCalledTimes(1)
    })

    expect(handleRemoveImage).toBeCalledWith({
      name: 'eu-hopi.jpeg',
      url: 'blob:http://localhost:3000/00dbd3b4-0786-40ca-8516-d75ecd6f19b7',
    })
  })

  it('should add image to preview', async () => {
    const { rerender } = render(
      <FileInput
        previewImages={previewImages}
        handleSelectImages={handleSelectImages}
        handleRemoveImage={handleRemoveImage}
      />
    )

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    const input = screen.getByTestId('add-testid')

    await act(async () => {
      await waitFor(() => {
        fireEvent.change(input, fakeFile)
      })
    })

    await waitFor(() => {
      expect(handleSelectImages).toBeCalledTimes(1)

      rerender(
        <FileInput
          previewImages={previewImages}
          handleSelectImages={handleSelectImages}
          handleRemoveImage={handleRemoveImage}
        />
      )
    })
  })
})
