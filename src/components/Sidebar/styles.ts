import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  max-width: 96px;

  height: 100vh;
  max-height: 820px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1.5rem;

  background-color: var(--blue-500);

  > a {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
