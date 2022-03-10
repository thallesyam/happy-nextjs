import styled from 'styled-components'

type ITheme = {
  width: string
  height: string
  textHoverColor: string
  background: string
  hover: string
  fontSize: string
  radius: string
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

  border-radius: ${({ theme }) => theme.radius};

  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.textHoverColor};
    background: ${({ theme }) => theme.hover};

    > svg {
      path {
        stroke: ${({ theme }) => theme.textHoverColor};
      }
    }
  }
`
