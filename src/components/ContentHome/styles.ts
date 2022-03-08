import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;

  align-items: center;

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
  }

  .image-section {
    display: flex;
    position: relative;

    > img {
      position: relative;
      top: -7rem;
    }

    > a {
      position: absolute;
      right: 0;
      bottom: 8rem;

      display: block;
      width: 5rem;
    }
  }
`
