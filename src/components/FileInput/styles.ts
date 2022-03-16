import styled from 'styled-components'

type ITheme = {
  grid: boolean
}

type IFile = {
  theme: ITheme
}

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

  > input[type='file'] {
    display: none;
  }
`

export const LabelNewImage = styled.label`
  height: 96px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div<IFile>`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: ${({ theme }) =>
    theme.grid ? 'repeat(5, 1fr)' : '1fr'};

  > div {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > img {
      width: 100%;
      height: 96px;
      object-fit: cover;
      border-radius: 20px;
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
`
