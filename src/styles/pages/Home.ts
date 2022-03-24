import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;

  background: var(--bg-blue);

  .wrapper-logo-happy {
    position: absolute;
    z-index: 10;
    top: 47%;
    right: 50%;
    transform: translate(50%, -50%);

    @media (max-width: 768px) {
      top: 45%;
      left: 40%;
    }
  }
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`
