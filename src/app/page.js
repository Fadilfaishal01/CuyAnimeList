import Link from "next/link"
import CardList from "./components/CardList"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`)
  const topAnimeList = await response.json()
  
  return (
    <div className="mx-4">
      <div className="py-10 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Populer Anime</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-400 transition-all">Lihat Semua</Link>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3'>
        {
          topAnimeList.data.map(data => {
          return (
              <div key={data.mal_id} className="shadow-xl">
                <CardList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
              </div>
            )
        })}
      </div>
      <div className="py-10">
        <h1 className="text-3xl p-4 font-semibold bg-indigo-400 rounded text-white">Rate Tertinggi</h1>
      </div>
    </div>
  )
}

export default Page
