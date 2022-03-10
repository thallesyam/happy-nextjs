import styled from 'styled-components'

export const Container = styled.section`
  .leaflet-container {
    position: relative;

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
`
