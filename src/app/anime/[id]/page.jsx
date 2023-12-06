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
import InputComment from '@/components/CardAnimeList/InputComment'
import Rating from '@/components/CardAnimeList/Rating'
import CommentAnimeList from '@/components/CardAnimeList/CommentAnimeList'

const AnimeDetailPage = async ({ params: {id} }) => {
   const detailAnime = await getAnimeResponse(`anime/${id}`)
   const user = await authUserSession();
   const collection = await prisma.tb_Collection.findFirst({
      where: {
         user_email: user?.email,
         anime_mal_id: id
      }
   })
   const commentar = await prisma.tb_Comment.findMany({
      where: {
         anime_mal_id: id
      }
   })
   
   return (
      <div className='pb-10'>
         <div className='pt-4 px-4'>
            <h3 className='text-3xl font-semibold text-color-primary mb-4'>{detailAnime.data.title}</h3>            
            <div className='w-full flex flex-col'>
               <div className='flex flex-row text-color-primary'>
                  <h5 className='font-normal w-32'>Dibuat oleh</h5>
                  <Link target='_blank' href={detailAnime.data.studios[0].url}>{detailAnime.data.studios[0].name}</Link>
               </div>
               <div className='flex flex-row text-color-primary'>
                  <h5 className='font-normal w-32'>Genre</h5>
                  {ListDataProfileAnime(detailAnime.data.genres)}
               </div>
               <div className='flex flex-row text-color-primary'>
                  <h5 className='font-normal w-32'>Producers</h5>
                  {ListDataProfileAnime(detailAnime.data.producers)}
               </div>
               <div className='flex flex-row text-color-primary'>
                  <h5 className='font-normal w-32'>Rating</h5>
                  <Rating rate={detailAnime.data.score} />
               </div>
            </div>
            { !collection && user && (<CollectionBtn dataAnime={detailAnime} user_email={user.email}  />)}
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
         {commentar.length > 0 && (
            <div className='w-full p-4'>
               <h3 className='font-semibold text-color-primary py-3'>Komentar :</h3>
               <CommentAnimeList user={user} dataCommentar={commentar} type="Anime" />
            </div>
         )}
         {user && (
            <div className='p-4'>
               <InputComment user={user} dataAnime={detailAnime} />
            </div>
         )}
         <div>
            {detailAnime.data.trailer.youtube_id && (<VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />)}
         </div>
      </div>
   )
}

export default AnimeDetailPage
