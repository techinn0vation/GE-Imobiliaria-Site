import styled from 'styled-components'

import BgHero from 'assets/img/BgHero.webp'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;

    background: url(${BgHero.src}) center no-repeat fixed;
    background-size: cover;
    top: 0;
    left: 0;

    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Shadow};
    top: 0;
    left: 0;

    transform: translateZ(0);
    z-index: -1;
  }

  /* -webkit-animation: fadeIn 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fadeIn 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
`
export const ContentHero = styled.main`
  width: 100%;
  max-width: 108rem;
  height: auto;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;
`
export const ViewHero = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 12.7rem;

  & > div:nth-child(1) {
    width: auto;
    display: grid;
    place-items: center;
    align-items: start;
    gap: 1.6rem;

    padding: 1.6rem 0;

    h1 {
      font-size: 4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 6rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  &::before,
  &::after {
    content: '';
    width: 0.2rem;
    height: 10rem;
    border-radius: 0.2rem;
    background-color: ${(props) => props.theme.colors.Branco};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 49rem;
  }
`
