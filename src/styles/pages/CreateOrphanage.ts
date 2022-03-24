import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 96px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  > section {
    display: flex;
    align-items: center;
    flex-direction: column;

    .form_wrapper {
      padding: 4rem 5rem;

      @media (max-width: 768px) {
        padding: 2rem 1rem;
      }
    }

    .title {
      > h1 {
        margin: 2.5rem 0;
        font-size: 1.125rem;

        color: var(--gray-500);
        font-weight: 500;
      }

      svg {
        display: none;
      }

      @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        svg {
          display: block;
        }
      }
    }

      .boolean_container {
        margin-bottom: 4rem;

        > label {
          font-weight: 600;
          color: var(--gray-500);

          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 0.5rem;
        }

        > div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;

          > button {
            width: 100%;
            height: 4rem;
            border: 1px solid var(--gray-300);
            background-color: var(--white-500);

            font-size: 1.188rem;
            color: var(--gray-800);

            transition: all 0.2s;

            &:hover {
              filter: opacity(0.7);
            }
          }

          .afirmative {
            border-radius: 1.25rem 0 0 1.25rem;
            border-right: none;
          }

          .afirmative.active {
            border: 1px solid var(--green-200);
            border-right: none;
            color: var(--green-500);
            background-color: var(--green-100);
          }

          .negative {
            border-radius: 0 1.25rem 1.25rem 0;
          }

          .negative.active {
            border: 1px solid var(--red-200);
            color: var(--red-500);
            background-color: var(--red-100);
          }
        }
      }
    }
  }
`
