import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameSlider } from './components/GameSlider';

import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg'
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/CreatedAdModal';

import 'keen-slider/keen-slider.min.css'

import axios from 'axios'

export interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  //TODO: tentar usar essas biblioteca
  // Keen Slider: npm install keen-slider (instalada)
  // Select Radix: npm install @radix-ui/react-select
  // React Hook Form: npm install react-hook-form


  // -=-=-=-=-=-=-=-= KEEN SLIDER =-=-=-=-=-=-=-=-



  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="logo nlw" />

      <h1 className='text-6xl text-white font-black mt-10'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div hidden>
        <GameSlider data={games} />
      </div>

      <div className='grid grid-cols-6 gap-6 mt-16 keen-slider__slide'>
        {games.map(game => {
          return <GameBanner
            key={game.id}
            id={game.id}
            bannerUrl={game.bannerUrl}
            tittle={game.title}
            adsCount={game._count.ads} />
        })}
      </div>


      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>

    </div>

  )
}

export default App
