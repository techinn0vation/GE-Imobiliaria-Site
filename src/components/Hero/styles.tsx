import styled from 'styled-components'

import BgHero from 'assets/img/House.webp'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;
  align-items: center;

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(${BgHero.src}) center no-repeat fixed;
    background-size: cover;
    top: 0;
    left: 0;

    transform: translateZ(0);
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Shadow};
    top: 0;
    left: 0;
    z-index: -1;
  }
`
export const ContentHero = styled.main`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  height: auto;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;

  padding: 1.5rem;

  & > div:nth-child(1) {
    width: auto;
    display: grid;
    place-items: center;
    align-items: start;
    gap: 1.6rem;

    h1 {
      font-size: 4.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 7.2rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
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
    width: 0.1rem;
    height: 15rem;
    background-color: ${(props) => props.theme.colors.Branco};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(1) {
      max-width: 48rem;
    }
  }
`
