"use client" // Untuk memakai event yg ada di browser, seperti onClick, onChange
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const InputSearch = () => {
   const searchRef = useRef()
   const router = useRouter();

   const handleSearch = (e) => {
      const keyword = searchRef.current.value;

      if (!keyword) return;

      if (e.key == 'Enter' || e.type == 'click') {
         e.preventDefault()
         router.push(`/search/${keyword}`)         
      }      
   }

   return (
      <div className='relative md:mt-0 sm:mt-5'>
         <input placeholder='Cari Anime...' className='p-2 rounded w-full' ref={searchRef} onKeyDown={handleSearch} />
         <button className='absolute top-2 end-2' onClick={handleSearch}><MagnifyingGlass size={24} /></button>
      </div>
   )
}

export default InputSearch
