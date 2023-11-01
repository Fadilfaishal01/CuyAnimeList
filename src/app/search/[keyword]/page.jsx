import CardAnimeList from "@/components/CardAnimeList"
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList"

const Page = async ({ params }) => {
   const decodeKeyword = decodeURI(params.keyword);
   const searchAnime = await getAnimeResponse('anime', `q=${decodeKeyword}`)

   return (
      <div className="mx-4">
         <HeaderAnimeList titleCardList={`Pencarian Untuk ${decodeKeyword}`} />
         <CardAnimeList dataAnime={searchAnime} />
         <div className="py-10">
            <h1 className="text-3xl p-4 font-semibold bg-indigo-400 rounded text-white">Rate Tertinggi</h1>
         </div>
      </div>
  )
}

export default Page
