import { act, render, screen, waitFor, fireEvent } from '@testing-library/react'
import { FileInput } from '.'
import { renderHook } from '@testing-library/react-hooks'
import { useImage } from '../../hooks/useImage'

describe('FileInput component', () => {
  fit('should render correctly button link', async () => {
    // const { container, rerender } = render(<FileInput />)
    // const { waitForNextUpdate } = renderHook(() => useImage())
    // const image = container.getElementsByClassName('new-image')[0]
    // const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    // const input = screen.getByTestId('add-testid')
    // await act(async () => {
    //   fireEvent.change(input, fakeFile)
    // })
    // await waitForNextUpdate()
    // expect(image).toBeInTheDocument()
    // expect(image).toHaveAttribute('alt', 'hello.png')
  })
})
