import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  /* background-color: ${(props) => props.theme.colors.MarromClaro}; */
`
export const ContentHeader = styled.main`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.MarromEscuro};
`
export const Branding = styled(Image)`
  width: 20rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
