import { render, screen } from '@testing-library/react'
import { FileInput } from '.'
import { renderHook } from '@testing-library/react-hooks'
import { useImage } from '../../hooks/useImage'

describe('FileInput component', () => {
  fit('should render correctly button link', async () => {
    const { result } = renderHook(() => useImage())

    const { container, rerender } = render(<FileInput />)
  })
})
