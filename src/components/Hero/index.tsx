'use client'

import Headline from 'components/Ui/Headline'

import { ContentHero, ViewHero, WrapperHero } from './styles'

export default function Hero() {
  return (
    <WrapperHero>
      <ContentHero>
        <ViewHero>
          <Headline
            title='Encontre o lar dos seus sonhos'
            text='sua jornada para o lar perfeito começa aqui, com uma das melhores imobiliárias de maringá.'
          />
        </ViewHero>
      </ContentHero>
    </WrapperHero>
  )
}
