import styled from 'styled-components'

export const WrapperFiltroImoveis = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentFiltroImoveis = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  button {
    background-color: ${(props) => props.theme.colors.MarromClaro};
    border-radius: 0.5rem;
    padding: 1.2rem 2rem;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;
    text-transform: capitalize;
  }
`
export const ViewFiltroImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  /* padding: 0 1.5rem; */

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    place-items: center;
    align-items: center;
  }
`
export const BlockFiltroImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputFiltroImoveis = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: solid 0.1rem ${(props) => props.theme.colors.Preto};
  border-radius: 0.5rem;
  outline: none;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.Preto};
  text-align: left;

  &::placeholder {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.Preto};
    opacity: 0.8;
  }
`
