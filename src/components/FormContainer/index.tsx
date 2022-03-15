import { ReactNode } from 'react'

import { Container } from './styles'

interface FormContainerProps {
  children: ReactNode
}

export function FormContainer({ children }: FormContainerProps) {
  return <Container>{children}</Container>
}
