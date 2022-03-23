import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'
import { ChangeEvent } from 'react'
import { useImage } from '../useImage'

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

  it('should render correctly button link', () => {})
})
