import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  .leaflet-container {
    border-radius: 1.25rem 1.25rem 0 0;
    position: relative;
    cursor: pointer;

    .leaflet-control-container {
      display: none;
    }

    .link-add-orphanage {
      z-index: 999;
      position: absolute;
      right: 3.813rem;
      bottom: 3rem;

      width: 64px;
      height: 64px;
    }
  }

  .leaflet-popup {
    margin-bottom: 10px;
    left: -128px !important;
  }

  .leaflet-popup-content-wrapper {
    width: 244px;
    height: 64px;

    opacity: 0.9;

    display: flex;
    align-items: center;

    .leaflet-popup-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0;
      padding: 0 0.75rem 0 1.5rem;

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
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .map_info {
    padding: 12px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 1.25rem 1.25rem;
    background: var(--white-500);

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    > p {
      margin: 0;
      color: var(--blue-900);
      font-size: 0.875rem;
      font-weight: 600;
    }
  }
`
