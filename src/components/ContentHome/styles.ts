import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;

  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .text-section {
    > h1 {
      font-size: 5rem;
      font-weight: 800;
      line-height: 4.5rem;

      color: var(--white);

      margin-bottom: 2.5rem;
    }

    > p {
      font-size: 1.5rem;
      font-weight: 600;

      color: var(--white);
    }

    @media (max-width: 768px) {
      padding: 40px 1rem;
    }
  }

  .image-section {
    display: flex;
    position: relative;

    @media (max-width: 768px) {
      position: unset;
    }

    > img {
      position: relative;
      top: -7rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    > a {
      position: absolute;
      right: 0;
      bottom: 8.8rem;

      display: block;
      width: 5.5rem;

      @media (max-width: 768px) {
        left: 1rem;
      }
    }
  }
`
