import styled from 'styled-components'

type ITheme = {
  height: string
}

type IInput = {
  theme: ITheme
}

export const Container = styled.section<IInput>`
  .label_container {
    display: flex;
    align-items: center;
    gap: 2rem;

    > p {
      font-size: 0.875rem;
      font-weight: 300;
      color: var(--gray-500);
    }
  }

  label {
    font-weight: 600;
    color: var(--gray-500);
  }

  > .input_container {
    margin-bottom: 2rem;

    > p {
      font-size: 0.75rem;
      color: var(--red-500);
    }
  }

  .input_element {
    width: 100%;
    margin: 0.5rem 0 0rem;

    padding: 0 1rem;
    border-radius: 20px;

    background-color: var(--white-500);
    outline: none;
    border: 1px solid var(--gray-300);

    height: ${({ theme }) => (theme.height ? theme.height : '4rem')};
    color: var(--black);
  }

  .textarea_element {
    width: 100% !important;
    margin: 0.5rem 0 0;

    padding: 1rem;
    border-radius: 20px;

    background-color: var(--white-500);
    outline: none;
    border: 1px solid var(--gray-300);

    resize: none;

    height: ${({ theme }) => (theme.height ? theme.height : '4rem')};
    color: var(--black);
  }
`
