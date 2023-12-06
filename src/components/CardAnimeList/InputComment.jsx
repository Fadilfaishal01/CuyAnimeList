"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const InputComment = ({user, dataAnime}) => {
   const router = useRouter()
   const [comment, setComment] = useState('')

   const handleInputComment = (e) => {
      setComment(e.target.value);
   }

   const handleSubmitComment = async (e) => {
      e.preventDefault()

      if (comment.trim("") == "") {
         return alert("Komentar tidak boleh kosong");
      } else if (comment.length < 4) {
         return alert("Komentar minimal 3 karakter");
      }

      const params = {
         anime_mal_id: String(dataAnime.data.mal_id),
         user_email: user.email,
         username: user.name,
         comment: comment,
         anime_name: dataAnime.data.title,
      }

      const apiComment = await fetch(`/api/v1/comment`, {
         method: 'POST',
         body: JSON.stringify(params)
      })

      const response = await apiComment.json()
      
      if (response.status == '200') {
         alert("Komen Berhasil di tambahkan")
         setComment("")
         router.refresh()
      } else {
         return alert("Terjadi Kesalahan, Silahkan Coba Lagi")
      }
   }

   return (
      <div className="flex flex-col gap-2">
         <textarea value={comment} onChange={handleInputComment} className="h-32 w-full text-xl p-3" />
         <button className="w-1/3 py-2 px-3 bg-color-accent text-color-primary" onClick={handleSubmitComment}>Posting</button>
      </div>
   )
}

export default InputComment