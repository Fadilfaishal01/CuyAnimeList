"use client"

import React from 'react'
import { getAnimeResponse } from '@/libs/api-libs'
import ListDataProfileAnime from '@/components/Utils/ListDataProfileAnime'
import Rating from '@/components/CardAnimeList/Rating'
import Image from 'next/image'
import TabPaneListAnime from '@/components/CharactersDetail/TabPaneListAnime'

const CharacterDetailPage = async ({ params: {id} }) => {
  const detailCharacters = await getAnimeResponse(`characters/${id}`)

  return (
    <div className='pb-10 pt-4 px-4'>
      <div className='w-full mb-4'>
        <h3 className='text-3xl font-semibold text-color-primary mb-4'>{detailCharacters.data.name}</h3>            
        <div className='w-full flex flex-col'>
            <div className='flex flex-row text-color-primary'>
              <h5 className='font-normal w-32'>Nickname</h5> 
              {ListDataProfileAnime(detailCharacters.data.nicknames, "SingleData")}
            </div>
            <div className='flex flex-row text-color-primary'>
              <h5 className='font-normal w-32'>Name Kanji</h5>
              <h5 className='italic'>{detailCharacters.data.name_kanji}</h5>
            </div>
            <div className='flex flex-row text-color-primary'>
              <h5 className='font-normal w-32'>Rating</h5>
              <Rating rate={5} />
            </div>
        </div>
      </div>
      <div className='flex sm:flex-nowrap flex-wrap gap-2 text-color-primar mb-4'>
        <Image 
            src={detailCharacters.data.images.webp.image_url}
            alt={detailCharacters.data.images.jpg.image_url}
            width={300}
            height={300}
            className='rounded object-cover w-1/6'
        />
        <div className='w-5/6'>
          <TabPaneListAnime dataCharacterAnime={detailCharacters} />
        </div>
      </div>
  </div>
  );
}

export default CharacterDetailPage
