import Button from 'components/Ui/Button'

import {
  BlockFiltroImoveis,
  ContentFiltroImoveis,
  InputFiltroImoveis,
  ViewFiltroImoveis,
  WrapperFiltroImoveis
} from './styles'

export default function FiltroImoveis() {
  return (
    <WrapperFiltroImoveis>
      <ContentFiltroImoveis>
        <ViewFiltroImoveis>
          <BlockFiltroImoveis>
            <InputFiltroImoveis placeholder='localização' type='text' />
          </BlockFiltroImoveis>
          <BlockFiltroImoveis>
            <InputFiltroImoveis placeholder='propriedade' type='text' />
          </BlockFiltroImoveis>
          <BlockFiltroImoveis>
            <InputFiltroImoveis placeholder='preço' type='text' />
          </BlockFiltroImoveis>
        </ViewFiltroImoveis>
        <Button text='buscar' onClick={() => {}} />
      </ContentFiltroImoveis>
    </WrapperFiltroImoveis>
  )
}
