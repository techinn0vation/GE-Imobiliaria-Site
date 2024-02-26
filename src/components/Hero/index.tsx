'use client'

import Headline from 'components/Ui/Headline'

import { ContentHero, WrapperHero } from './styles'

export default function Hero() {
  return (
    <WrapperHero>
      <ContentHero>
        <Headline
          title='encontre o seu novo lar'
          text='sua jornada para o lar perfeito começa aqui, com uma das melhores imobiliárias de maringá.'
        />
      </ContentHero>
    </WrapperHero>
  )
}
