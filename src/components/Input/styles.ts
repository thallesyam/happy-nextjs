import styled from 'styled-components'

type ITheme = {
  height: string
}

type IInput = {
  theme: ITheme
}

export const Container = styled.section`
  label {
    font-weight: 600;
    color: var(--gray-500);

    display: flex;
    align-items: center;
    gap: 2rem;

    > p {
      font-size: 0.875;
      font-weight: 300;
    }
  }
`

export const Input = styled.input<IInput>`
  width: 100%;
  margin: 0.5rem 0 2rem;

  padding: 0 0.5rem;
  border-radius: 20px;

  background-color: var(--white-500);
  outline: none;
  border: 1px solid var(--gray-300);

  height: ${({ theme }) => (theme.height ? theme.height : '4rem')};
  color: var(--black);
`

export const TextArea = styled.textarea<IInput>`
  width: 100% !important;
  margin: 0.5rem 0 2rem;

  padding: 1rem;
  border-radius: 20px;

  background-color: var(--white-500);
  outline: none;
  border: 1px solid var(--gray-300);

  resize: none;

  height: ${({ theme }) => (theme.height ? theme.height : '4rem')} !important;
  color: var(--black);
`
