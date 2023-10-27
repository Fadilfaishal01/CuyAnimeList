import Image from 'next/image'
import Link from 'next/link'

const CardList = ({title, image, id}) => {
  return (
      <Link href={`/${id}`} className="h-full cursor-pointer">
         <div className='flex justify-center'>
            <Image src={image} alt={title} width={350} height={350} className='w-full max-h-80 object-cover' />
         </div>
         <h3 className='font-semibold md:text-xl sm:text-md p-4'>{title}</h3>
      </Link>
  )
}

export default CardList
