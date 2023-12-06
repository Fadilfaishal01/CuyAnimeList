"use client"

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
               return (
                  <Link key={kData + vData.anime_mal_id} href={`/anime/${vData.anime_mal_id}`} className='relative border-2 border-color-accent'>
                     <Image src={vData.anime_image} className='w-full' alt={`Anime Collection ${vData.anime_title}`} width={250} height={250} />
                     <div className='absolute flex flex-col items-center justify-center bottom-0 w-full bg-color-primary h-24'>
                        <h6 className='text-xl text-center font-semibold w-full'>
                           {vData.anime_title}
                        </h6>
                        <h6>
                           {ListDataProfileAnime(JSON.parse(vData.anime_genres), "SingleData")}
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