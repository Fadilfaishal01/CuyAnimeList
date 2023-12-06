"use client"

import { Plus } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const CollectionBtn = ({ dataAnime, user_email }) => {
   const router = useRouter()
   
   const handleCollection = async (e) => {
      e.preventDefault();
      
      const dataGenres = dataAnime.data.genres.map((item) => {
         return item.name
      })

      const params = {
         anime_mal_id: String(dataAnime.data.mal_id),
         anime_title: dataAnime.data.title,
         anime_image: dataAnime.data.images.webp.image_url,
         anime_genres: JSON.stringify(dataGenres),
         user_email: user_email,
      }

      const collection = await fetch(`/api/v1/collection`, {
         method: 'POST',
         body: JSON.stringify(params)
      })

      const response = await collection.json()
      
      if (response.status == '200') {
         return router.push('/users/collection')
      } else {
         return alert("Terjadi Kesalahan, Silahkan Coba Lagi")
      }
   }

   return (
      <button className="flex flex-row my-3 bg-color-accent font-semibold p-2" onClick={handleCollection}>
         <Plus size={24} />
         <span>Add to Collection</span>
      </button>
   )
}

export default CollectionBtn