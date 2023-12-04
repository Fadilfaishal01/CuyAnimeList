import Image from 'next/image'
import Link from 'next/link'

const CardAnimeList = ({dataAnime, type}) => {
  return (
      <>
         <div className='grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-3 p-1'>
            {
               type == 'Populer' ? (
                  dataAnime.data?.map(data => {
                     return (
                        <div key={data.mal_id} className="shadow-xl">
                           <Link href={`/anime/${data.mal_id}`} className="h-full cursor-pointer text-color-primary hover:text-color-accent transition-all">
                              <div className='flex justify-center'>
                                 <Image src={data.images.webp.image_url} alt={data.title} width={350} height={350} className='w-full max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold md:text-xl sm:text-md p-4'>{data.title}</h3>
                           </Link>
                        </div>
                     )
                  })
               ) : type == 'Top Characters' ? (
                  dataAnime.data?.map(data => {
                     return (
                        <div key={data.mal_id} className="shadow-xl">
                           <Link href={`/${data.mal_id}`} className="h-full cursor-pointer text-color-primary hover:text-color-accent transition-all">
                              <div className='flex justify-center'>
                                 <Image src={data.images.webp.image_url} alt={data.name} width={350} height={350} className='w-full max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold md:text-xl sm:text-md p-4'>{data.name}</h3>
                           </Link>
                        </div>
                     )
                  })
               ) : type == 'Rekomendasi' ? (
                  dataAnime.map(data => {
                     return (
                        <div key={data.mal_id} className="shadow-xl">
                           <Link href={`/anime/${data.mal_id}`} className="h-full cursor-pointer text-color-primary hover:text-color-accent transition-all">
                              <div className='flex justify-center'>
                                 <Image src={data.images.webp.image_url} alt={data.title} width={350} height={350} className='w-full max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold md:text-xl sm:text-md p-4'>{data.title}</h3>
                           </Link>
                        </div>
                     )
                  })
               ) : null
            }
         </div>
      </>
  )
}

export default CardAnimeList
