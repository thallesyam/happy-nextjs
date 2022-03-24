import styled from 'styled-components'

export const Header = styled.header`
  padding-top: 4rem;
  margin: 0 auto 3rem;

  display: flex;
  justify-content: space-between;

  > section {
    display: flex;
    align-items: center;

    gap: 4rem;
  }

  a {
    width: 100%;
    max-width: 222px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;

    button {
      display: none;
    }

    a {
      > img {
        max-width: 200px;
      }
    }
  }
`
