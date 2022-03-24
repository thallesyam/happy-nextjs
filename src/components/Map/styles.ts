import styled from 'styled-components'

export const Container = styled.section`
  > a {
    z-index: 999;
    position: absolute;
    top: 1rem;
    left: 1rem;

    display: flex;
    align-items: center;

    gap: 1rem;

    text-decoration: none;
    color: var(--gray-700);
    font-weight: 700;
  }

  .leaflet-container {
    position: relative;

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

      @media (max-width: 768px) {
        left: 42%;
      }
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
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`
