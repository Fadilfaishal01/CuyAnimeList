import { getAnimeResponse } from '@/libs/api-libs'
import CardPoint from '@/components/Utils/CardPoint'
import ListDataProfileAnime from '@/components/Utils/ListDataProfileAnime'
import VideoPlayer from '@/components/Utils/VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CollectionBtn from '@/components/CardAnimeList/CollectionBtn'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

const AnimeDetailPage = async ({ params: {id} }) => {
   const detailAnime = await getAnimeResponse(`anime/${id}`)
   const user = await authUserSession();
   const collection = await prisma.db_Collection.findFirst({
      where: {
         user_email: user?.email,
         anime_mal_id: id
      }
   })
   
   return (
      <div className='pb-10'>
         <div className='pt-4 px-4'>
            <h3 className='text-3xl font-semibold text-color-primary mb-4'>{detailAnime.data.title}</h3>
            <h5 className='text-color-primary'>Dibuat oleh Studio : <Link target='_blank' href={detailAnime.data.studios[0].url}>{detailAnime.data.studios[0].name}</Link></h5>
            <h5 className='text-color-primary'>Genre : {ListDataProfileAnime(detailAnime.data.genres)}</h5>
            <h5 className='text-color-primary'>Producers : {ListDataProfileAnime(detailAnime.data.producers)}</h5>
            { !collection && user && (<CollectionBtn anime_mal_id={id} user_email={user.email} />)}
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
               className='rounded object-cover'
            />
            <div className='px-2'>
               <p className='text-2xl font-bold'>Description</p>
               <p className='text-justify text-xl'>{detailAnime.data.synopsis}</p>
            </div>
         </div>
         <div>
            <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
         </div>
      </div>
   )
}

export default AnimeDetailPage
