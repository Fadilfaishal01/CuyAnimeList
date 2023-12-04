import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'
import ButtonAuth from './ButtonAuth'

const NavigationBar = () => {
  return (
    <header className='bg-color-accent'>
      <div className='p-5 flex md:flex-row flex-col justify-between md:items-center gap-2'>
         <Link href="/" className='font-bold text-3xl'>CuyAnimeList</Link>
         <InputSearch />
         <ButtonAuth />
      </div>
    </header>
  )
}

export default NavigationBar
