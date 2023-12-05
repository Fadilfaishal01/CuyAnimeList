import { getAnimeResponse } from "@/libs/api-libs";
import CardAnimeList from "@/components/CardAnimeList"
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList"

const Page = async ({ params }) => {
   const decodeKeyword = decodeURI(params.keyword);
   const searchAnime = await getAnimeResponse('anime', `q=${decodeKeyword}`)
   
   return (
      <>
         <div className="mx-4">
            <HeaderAnimeList titleCardList={`Pencarian Untuk ${decodeKeyword}`} />
            <CardAnimeList dataAnime={searchAnime} type="Populer" />
         </div>
      </>
  )
}

export default Page
