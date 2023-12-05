'use client'

import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const HeaderNavigation = ({title}) => {
   const router = useRouter()
   
   const redirectBackToDashboard = (e) => {
      e.preventDefault();
      return router.back()
   }

   return (
      <div className='flex justify-between items-center mb-4'>
         <button className='text-2xl text-color-primary cursor-pointer' onClick={redirectBackToDashboard}>
            <ArrowLeft size={32} />
         </button>
         <h3 className='text-2xl text-color-primary font-bold'>{title}</h3>
      </div>
   )
}

export default HeaderNavigation