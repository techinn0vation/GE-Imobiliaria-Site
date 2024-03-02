'use client'

import { useState, useEffect } from 'react'

import FiltroImoveis from 'components/FiltroImoveis'
import Text from 'components/Ui/Text'
import Title from 'components/Ui/Title'

import {
  BlockCategorias,
  ContentCategorias,
  FrameBlockCategorias,
  ViewCategorias,
  WrapperCategorias
} from './styles'

import Apart from 'assets/img/Apartment.webp'
import Cond from 'assets/img/Condominium.webp'
import Home from 'assets/img/Home.webp'
import News from 'assets/img/News.webp'

export default function Categorias() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('categorias')

    if (element) {
      const elementPosition = element.offsetTop

      if (scrollPosition > elementPosition - window.innerHeight / 1.6) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <WrapperCategorias className={isVisible ? 'visible' : ''} id='categorias'>
      <ContentCategorias>
        <Title title='pelo que você está procurando?' />
        <ViewCategorias>
          <BlockCategorias>
            <FrameBlockCategorias src={Home} alt='Categorias' priority={true} />
            <Text text='casas' />
          </BlockCategorias>
          <BlockCategorias>
            <FrameBlockCategorias src={Cond} alt='Categorias' priority={true} />
            <Text text='condomínios' />
          </BlockCategorias>
          <BlockCategorias>
            <FrameBlockCategorias
              src={Apart}
              alt='Categorias'
              priority={true}
            />
            <Text text='apartamentos' />
          </BlockCategorias>
          <BlockCategorias>
            <FrameBlockCategorias src={News} alt='Categorias' priority={true} />
            <Text text='lançamentos' />
          </BlockCategorias>
        </ViewCategorias>
        <FiltroImoveis />
      </ContentCategorias>
    </WrapperCategorias>
  )
}
