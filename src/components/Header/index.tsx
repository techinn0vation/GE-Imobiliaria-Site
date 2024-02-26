import { Branding, ContentHeader, WrapperHeader } from './styles'

import Brand from 'assets/img/Brand.webp'

export default function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <Branding
          src={Brand}
          alt='Grupo Gestão Empreendimentos'
          priority={true}
        />
      </ContentHeader>
    </WrapperHeader>
  )
}
