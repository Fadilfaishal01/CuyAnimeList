"use client"

import { Trash } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const BtnDelete = ({id}) => {
   const router = useRouter()

   const handleDeleteComment = async (e) => {
      e.preventDefault();

      const params = {
         id: id,
      }

      const comment = await fetch(`/api/v1/comment`, {
         method: 'DELETE',
         body: JSON.stringify(params)
      })

      const response = await comment.json()
      
      if (response.status == '200') {
         return router.refresh()
      } else {
         return alert("Terjadi Kesalahan, Silahkan Coba Lagi")
      }
   }

   return (
      <>
         <button className="bg-color-accent p-4" onClick={handleDeleteComment}><Trash size={32} /></button>
      </>
   )
}

export default BtnDelete