import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 96px 1fr;

  > section {
    display: flex;
    align-items: center;
    flex-direction: column;

    > h1 {
      margin: 2.5rem 0;
      font-size: 1.125rem;

      color: var(--gray-500);
      font-weight: 500;
    }
  }
`
