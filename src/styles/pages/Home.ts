import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background: var(--bg-blue);
`
export const Header = styled.header`
  width: 100%;
  max-width: 1120px;

  padding-top: 4rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  > section {
    display: flex;
    align-items: center;

    gap: 4rem;

    strong,
    p {
      color: var(--white);
      font-size: 1.25rem;
    }

    > strong {
      font-weight: 800;
    }

    > p {
      font-weight: 600;
    }
  }

  a {
    width: 100%;
    max-width: 222px;
  }
`
