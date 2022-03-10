import { ReactNode } from 'react'
import { Button as ButtonStyled } from './styles'

type IButton = {
  children: ReactNode
  textHoverColor: string
  bgColor: string
  width: string
  onClick?: () => void
  hover?: string
  height?: string
  fontSize?: string
  radius?: string
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
  radius = '1.25rem',
  ...rest
}: IButton) {
  const theme = {
    textHoverColor,
    background: bgColor,
    fontSize,
    hover,
    width,
    height,
    radius,
  }

  return (
    <ButtonStyled onClick={onClick} theme={theme} {...rest}>
      {children}
    </ButtonStyled>
  )
}
