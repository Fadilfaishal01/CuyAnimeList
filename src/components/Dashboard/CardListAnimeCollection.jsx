"use client"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ListDataProfileAnime from "../Utils/ListDataProfileAnime"

const CardListAnimeCollection = ({dataCollection}) => {
   const [data, setData] = useState([])
   
   useEffect(() => {
      setData(dataCollection)
   }, [dataCollection])

   return (
      <>
         {
            data.map(async (vData, kData) => {
               let dataAnime = await getAnimeResponse(`anime/${vData.anime_mal_id}`)

               return (
                  <Link key={kData + vData.anime_mal_id} href={`/anime/${dataAnime.data.mal_id}`} className='relative border-2 border-color-accent'>
                     <Image src={dataAnime.data.images.webp.image_url} className='w-full' alt={`Anime Collection ${dataAnime.data.title}`} width={250} height={250} />
                     <div className='absolute flex flex-col items-center justify-center bottom-0 w-full bg-color-primary h-24'>
                        <h6 className='text-xl text-center font-semibold w-full'>
                           {dataAnime.data.title}
                        </h6>
                        <h6>
                           {ListDataProfileAnime(dataAnime.data.genres)}
                        </h6>
                     </div>
                  </Link>
               )
            })
         }
      </>
   )
}

export default CardListAnimeCollection