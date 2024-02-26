import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  display: grid;
  place-items: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 13rem;
      height: 130vh;
      background-color: ${(props) => props.theme.colors.Marrom};
      top: 0;
      left: 0;
      transform: translate(0);
    }

    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 100%;
      background-color: ${(props) => props.theme.colors.Marrom};
      top: 50%;
      right: 0;
      transform: translate(0, 25rem);
    }
  }
`
export const ContentHeader = styled.main`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;

  display: grid;
  place-items: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Marrom};
`
export const Branding = styled(Image)`
  width: 100%;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
