"use client"
import CardComment from "./CardComment";

const CommentAnimeList = ({user, dataCommentar, type}) => {
   return (
      <div className="w-full flex grid-cols-8 gap-3">
         {
            dataCommentar.map((vData, kData) => {
               return (
                  <CardComment key={vData.anime_mal_id + vData.id + kData} data={vData} user={user} type={type} />
               )
            })
         }
      </div>
   );
}

export default CommentAnimeList