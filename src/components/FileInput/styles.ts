import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 5rem;

  > label {
    font-weight: 600;
    color: var(--gray-500);

    display: flex;
    align-items: center;
    gap: 2rem;

    margin-bottom: 0.5rem;
  }

  > .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;

    > img {
      width: 100%;
      height: 96px;
      object-fit: cover;
      border-radius: 20px;
    }

    > div {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    > .new-image {
      height: 96px;
      background: #f5f8fa;
      border: 1px dashed #96d2f0;
      border-radius: 20px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .remove-image {
      position: absolute;
      padding: 5px 5px 0 5px;

      background: #fff;
      border: 1px dashed #96d2f0;

      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;

      cursor: pointer;
    }
  }

  > input[type='file'] {
    display: none;
  }
`
