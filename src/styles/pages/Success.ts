import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: var(--green-500);

  display: flex;
  gap: 8rem;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:nth-child(1) {
      @media (max-width: 768px) {
        display: flex;
        order: 2;
      }
    }
    &:nth-child(2) {
      @media (max-width: 768px) {
        display: flex;
        order: 1;
      }
    }

    @media (max-width: 768px) {
      img {
        width: 200px;
      }
    }

    > h1 {
      color: var(--white);
      margin-bottom: 2rem;
      font-size: 5rem;
      font-weight: 700;
    }

    > p {
      text-align: center;
      color: var(--white);
      margin-bottom: 3.75rem;
      font-size: 1.5rem;
      font-weight: 500;
    }

    > a {
      width: 100%;
      max-width: 243px;
      text-decoration: none;
    }
  }
`
