import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4 h-screen flex-col'>
      <h1 className='text-color-primary text-4xl font-bold'>PAGE NOT FOUND</h1>
      <Link href="/" className='text-color-primary hover:text-color-accent transition-all underline flex-row flex gap-2'>
         <ArrowLeft size={24} /> Kembali Ke Halaman Utama
      </Link>
    </div>
  )
}

export default NotFound
