import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin: 0;
    font-size: 1.25rem;
    color: var(--blue-900);
    font-weight: 600;
  }

  a {
    display: block;
    width: 40px;
  }
`
