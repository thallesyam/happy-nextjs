import { FormHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

type FormContainerProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}

export function FormContainer({ children, ...rest }: FormContainerProps) {
  return <Container {...rest}>{children}</Container>
}
