import styled from 'styled-components'

export const Container = styled.aside`
  height: 100%;
  width: 100%;

  background: var(--bg-blue);

  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > .container-text {
    > h1 {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 3rem;

      color: var(--white);

      margin-bottom: 1.5rem;
    }

    > p {
      font-size: 1.125rem;
      font-weight: 400;

      color: var(--white);

      margin-bottom: 1.5rem;
    }
  }
`
