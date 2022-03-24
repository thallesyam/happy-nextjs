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

export const WrapperInfo = styled.div`
  width: 100%;
  max-width: 708px;

  margin-bottom: 2rem;

  border-radius: 1.25rem;

  background-color: var(--white);

  > img {
    width: 100%;
    height: 336px;
    object-fit: cover;
    border-radius: 1.25rem 1.25rem 0 0;

    margin-bottom: 4rem;
  }

  > div {
    padding: 0 5rem 4rem;

    > h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 2rem;

      color: var(--gray-700);
    }

    > p {
      color: var(--gray-800);
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 4rem;
    }

    > div {
      width: 100%;
      height: 152px;
      border-radius: 1.25rem 1.25rem 0 0;
      margin-bottom: 4rem;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      > img {
        width: 152px;
        object-fit: cover;
        border-radius: 1.25rem;
        height: 152px;
      }
    }

    .line {
      width: 100%;
      height: 1px;
      background-color: var(--gray-300);
      margin-bottom: 4rem;
    }

    > h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 2rem;

      color: var(--gray-700);
    }

    .instructions {
      margin-bottom: 1.5rem;
    }

    .cards_info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.25rem;

      .hours,
      .openWeeks {
        width: 100%;
        height: 176px;

        display: flex;
        justify-content: center;
        gap: 1rem;

        flex-direction: column;

        padding: 2rem 1.5rem;
        border-radius: 1.25rem;

        > p {
          max-width: 150px;
        }
      }

      .hours {
        background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
        border: 1px solid var(--blue-300);
        color: var(--gray-800);
      }

      .openWeeks {
        background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
        border: 1px solid var(--green-200);
        color: var(--green-500);
      }

      .openWeeks.false {
        background: linear-gradient(154.16deg, #fcf0f4 7.85%, #ffffff 91.03%);
        border: 1px solid var(--red-200);
        color: var(--red-500);
      }
    }

    .link-wpp {
      text-decoration: none;

      > button {
        display: flex;
        gap: 0.5em;
      }
    }
  }
`
