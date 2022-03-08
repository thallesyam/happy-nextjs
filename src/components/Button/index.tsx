import { ReactNode } from 'react'
import { Button as ButtonStyled } from './styles'

type IButton = {
  onClick?: () => void
  children: ReactNode
  textHoverColor: string
  bgColor: string
  width: string
  hover?: string
  height?: string
  fontSize?: string
}

export function Button({
  children,
  textHoverColor,
  bgColor,
  hover = bgColor,
  onClick,
  width,
  height = '4rem',
  fontSize = '1.125rem',
  ...rest
}: IButton) {
  const theme = {
    textHoverColor,
    background: bgColor,
    fontSize,
    hover,
    width,
    height,
  }

  return (
    <ButtonStyled onClick={onClick} theme={theme} {...rest}>
      {children}
    </ButtonStyled>
  )
}
