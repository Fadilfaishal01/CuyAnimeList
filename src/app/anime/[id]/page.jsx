import { getAnimeResponse } from '@/app/libs/api-libs'
import CardPoint from '@/components/Utils/CardPoint'
import VideoPlayer from '@/components/Utils/VideoPlayer'
import Image from 'next/image'
import React from 'react'

const AnimeDetailPage = async ({ params: {id} }) => {
   const detailAnime = await getAnimeResponse(`anime/${id}`)
   
   return (
      <>
         <div className='pt-4 px-4'>
            <h3 className='text-3xl font-semibold text-color-primary'>{detailAnime.data.title}</h3>
         </div>
         <div className='pt-4 px-4 flex gap-2 text-color-primary overflow-auto'>
            <CardPoint title="Peringkat" score={detailAnime.data.rank} />
            <CardPoint title="Favorite" score={detailAnime.data.favorites} />
            <CardPoint title="Skor" score={detailAnime.data.score} />
            <CardPoint title="Tahun" score={detailAnime.data.year} />
            <CardPoint title="Anggota" score={detailAnime.data.members} />
            <CardPoint title="Episode" score={detailAnime.data.episodes} />
            <CardPoint title="Status" score={detailAnime.data.status} />
            <CardPoint title="Season" score={detailAnime.data.season} />
            <CardPoint title="Sumber" score={detailAnime.data.source} />
         </div>
         <div className='pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary'>
            <Image 
               src={detailAnime.data.images.webp.image_url}
               alt={detailAnime.data.images.jpg.image_url}
               width={270}
               height={270}
               className='w-full rounded object-cover'
            />
            <div className='px-2'>
               <p className='text-2xl font-bold'>Description</p>
               <p className='text-justify text-xl'>{detailAnime.data.synopsis}</p>
            </div>
         </div>
         <div>
            <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
         </div>
      </>
   )
}

export default AnimeDetailPage
