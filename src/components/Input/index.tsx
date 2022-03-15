import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import {
  Container,
  Input as InputStyled,
  TextArea as TextAreaStyled,
} from './styles'

type IInput = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string
    labelName?: string
    labelDescription?: string
    isNotShowLabel?: boolean
    height?: string
    isTextArea?: boolean
  }

export function Input({
  isNotShowLabel = false,
  name,
  labelName,
  labelDescription,
  height,
  isTextArea = false,
  ...rest
}: IInput) {
  const theme = {
    height,
  }
  return (
    <Container>
      {!isNotShowLabel && (
        <label htmlFor={name}>
          {labelName}
          {labelDescription && <p>{labelDescription}</p>}
        </label>
      )}

      {isTextArea ? (
        <TextAreaStyled id={name} name={name} theme={theme} {...rest} />
      ) : (
        <InputStyled id={name} name={name} {...rest} theme={theme} />
      )}
    </Container>
  )
}
