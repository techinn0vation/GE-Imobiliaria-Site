import Image from 'next/image'

import styled from 'styled-components'

export const WrapperCategorias = styled.section`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6rem 0.5rem;

  opacity: 0;
  transform: translateX(-1rem);
  transition:
    opacity 0.3s,
    transform 0.3s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 6rem;
  }
`
export const ContentCategorias = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  & > h1 {
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.45rem;
    color: ${(props) => props.theme.colors.Preto};
    text-align: center;
    padding: 2rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`
export const ViewCategorias = styled.main`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  place-items: start;
  align-items: start;
  gap: 0.5rem;

  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.MarromClaro};
    border-radius: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    overflow: hidden;

    & > div {
      margin-bottom: 0;
    }
  }
`
export const BlockCategorias = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;

  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 3.5rem 1.5rem;

  margin-bottom: 1.6rem;

  background-color: ${(props) => props.theme.colors.MarromClaro};

  & > p {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`
export const FrameBlockCategorias = styled(Image)`
  width: 5rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
  filter: invert(1);
`
