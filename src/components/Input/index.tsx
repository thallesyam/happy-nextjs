import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { Container, TextArea as TextAreaStyled } from './styles'

type IInput = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string
    error: FieldError
    labelName?: string
    mask?: string
    maskChar?: string
    labelDescription?: string
    notShowLabel?: boolean
    notMaskedInput?: boolean
    height?: string
    isTextArea?: boolean
  }

function InputBase(
  {
    notShowLabel = false,
    notMaskedInput = true,
    name,
    error,
    labelName,
    mask,
    maskChar,
    labelDescription,
    height,
    isTextArea = false,
    ...rest
  }: IInput,
  ref
) {
  const theme = {
    height,
  }

  return (
    <Container theme={theme}>
      {!notShowLabel && (
        <div className="label_container">
          <label htmlFor={name}>{labelName}</label>
          {labelDescription && <p>{labelDescription}</p>}
        </div>
      )}

      <div className="input_container">
        {isTextArea ? (
          <TextAreaStyled
            id={name}
            name={name}
            theme={theme}
            {...rest}
            ref={ref}
          />
        ) : (
          <>
            {notMaskedInput ? (
              <input
                className="input_element"
                ref={ref}
                id={name}
                name={name}
                {...rest}
              />
            ) : (
              <InputMask
                className="input_element"
                ref={ref}
                id={name}
                name={name}
                mask={mask}
                maskChar={maskChar}
                {...rest}
              />
            )}
          </>
        )}

        {!!error && <p>{error.message}</p>}
      </div>
    </Container>
  )
}

export const Input = forwardRef(InputBase)
