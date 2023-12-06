import CardListAnimeCollection from '@/components/Dashboard/CardListAnimeCollection'
import HeaderNavigation from '@/components/Dashboard/HeaderNavigation'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'

const Page = async () => {
  const user = await authUserSession();  
  const collection = await prisma.tb_Collection.findMany({
    where: {
      user_email: user?.email
    }
 })

  return (
    <div className='m-4'>
      <HeaderNavigation title="My Collection" />
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <CardListAnimeCollection 
          dataCollection={collection} 
        />
      </div>
    </div>
  )
}

export default Page
