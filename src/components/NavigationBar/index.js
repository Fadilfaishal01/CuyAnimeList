import Link from 'next/link'
import React from 'react'
import Search from '../Search'

const NavigationBar = () => {
  return (
    <header className='bg-indigo-500'>
      <div className='p-5 flex md:flex-row flex-col justify-between'>
         <Link href="/" className='font-bold text-3xl text-white'>CuyAnimeList</Link>
         <Search />
      </div>
    </header>
  )
}

export default NavigationBar
