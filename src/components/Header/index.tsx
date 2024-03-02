import { Branding, ContentHeader, WrapperHeader } from './styles'

import Brand from 'assets/img/Brand.webp'

export default function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        `
        <Branding
          src={Brand}
          alt='Grupo Gestãp empreendimentos'
          priority={true}
        />
      </ContentHeader>
    </WrapperHeader>
  )
}
