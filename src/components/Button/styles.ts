import styled from 'styled-components'

type ITheme = {
  width: string
  height: string
  textHoverColor: string
  background: string
  hover: string
  fontSize: string
}

type IButton = {
  theme: ITheme
}

export const Button = styled.button<IButton>`
  width: 100%;
  height: ${({ theme }) => theme.height};
  max-width: ${({ theme }) => theme.width};

  color: var(--white);
  background: ${({ theme }) => theme.background};

  border-radius: 1.25rem;

  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize};

  transition: 0.2s all;
  &:hover {
    color: ${({ theme }) => theme.textHoverColor};
    background: ${({ theme }) => theme.hover};
  }
`
