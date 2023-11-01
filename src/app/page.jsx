import CardAnimeList from "@/components/CardAnimeList"
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  const topAnimeList = await getAnimeResponse('top/anime', 'limit=10')
  const topCharacters = await getAnimeResponse('top/characters', 'limit=20')
  
  return (
    <div className="mx-4">
      <HeaderAnimeList titleCardList="Anime Populer" route="/populer" routeTitle="Lihat Semua" />
      <CardAnimeList dataAnime={topAnimeList} type="Anime Populer" />
      <hr />
      <HeaderAnimeList titleCardList="Top Characters" route="/characters-populer" routeTitle="Lihat Semua" />
      <CardAnimeList dataAnime={topCharacters} type="Top Characters" />
    </div>
  )
}

export default Page
