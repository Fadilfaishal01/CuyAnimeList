import CardAnimeList from "@/components/CardAnimeList"
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList"
import { getAnimeResponse, getNestedAnimeResponse, reproduceDataRekomendasi } from "@/libs/api-libs"

const Page = async () => {
  const topAnimeList = await getAnimeResponse('top/anime', 'limit=10')
  const rekomendasiAnimeList = await getNestedAnimeResponse('recommendations/anime', 'entry')
  const topCharacters = await getAnimeResponse('top/characters', 'limit=10')

  return (
    <div className="mx-4">
      <HeaderAnimeList titleCardList="Populer" route="/anime-populer" routeTitle="Lihat Semua" />
      <CardAnimeList dataAnime={topAnimeList} type="Populer" />
      <hr />
      <HeaderAnimeList titleCardList="Rekomendasi" />
      <CardAnimeList dataAnime={reproduceDataRekomendasi(rekomendasiAnimeList)} type="Rekomendasi" />
      <hr />
      <HeaderAnimeList titleCardList="Top Characters" route="/character-populer" routeTitle="Lihat Semua" />
      <CardAnimeList dataAnime={topCharacters} type="Top Characters" />
    </div>
  )
}

export default Page
