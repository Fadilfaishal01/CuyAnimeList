import Image from 'next/image'
import Link from 'next/link'

const CardAnimeList = ({dataAnime, type}) => {
   return (
      <>
         <div className='grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-3 p-1'>
            {
               type == 'Populer' ? (
                  dataAnime.data?.map((vData, kData) => {
                     return (
                        <div key={vData.mal_id + kData} className="shadow-xl">
                           <Link href={`/anime/${vData.mal_id}`} className="h-full cursor-pointer text-color-primary transition-all">
                              <div className='flex justify-center'>
                                 <Image src={vData.images.webp.image_url} alt={vData.title} priority width={350} height={350} className='w-full min-h-80 max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold text-center md:text-xl sm:text-md p-4 hover:text-color-accent'>{vData.title}</h3>
                           </Link>
                        </div>
                     )
                  })
               ) : type == 'Top Characters' ? (
                  dataAnime.data?.map((vData, kData) => {
                     return (
                        <div key={vData.mal_id + kData} className="shadow-xl">
                           <Link href={`/character/${vData.mal_id}`} className="h-full cursor-pointer text-color-primary transition-all">
                              <div className='flex justify-center'>
                                 <Image src={vData.images.webp.image_url} alt={vData.name} priority width={350} height={350} className='w-full min-h-80 max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold text-center md:text-xl sm:text-md p-4 hover:text-color-accent'>{vData.name}</h3>
                           </Link>
                        </div>
                     )
                  })
               ) : type == 'Rekomendasi' ? (
                  dataAnime.map((vData, kData) => {
                     return (
                        <div key={vData.mal_id + kData} className="shadow-xl">
                           <Link href={`/anime/${vData.mal_id}`} className="h-full cursor-pointer text-color-primary transition-all">
                              <div className='flex justify-center'>
                                 <Image src={vData.images.webp.image_url} alt={vData.title} priority width={350} height={350} className='w-full min-h-80 max-h-80 object-cover' />
                              </div>
                              <h3 className='font-semibold text-center md:text-xl sm:text-md p-4 hover:text-color-accent'>{vData.title}</h3>
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
