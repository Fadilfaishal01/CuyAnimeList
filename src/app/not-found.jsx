"use client"

import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter();

  return (
    <div className='w-full flex justify-center items-center gap-4 h-screen flex-col'>
      <h1 className='text-color-primary text-4xl font-bold'>PAGE NOT FOUND</h1>
      <button onClick={() => router.back()} className='text-color-primary hover:text-color-accent transition-all underline flex-row flex gap-2'>
         <ArrowLeft size={24} /> Kembali Ke Halaman Utama
      </button>
    </div>
  )
}

export default NotFound