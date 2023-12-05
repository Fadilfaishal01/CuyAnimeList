import Link from "next/link"

const { authUserSession } = require("@/libs/auth-libs")
const { default: Image } = require("next/image")

const Page = async () => {
   const user = await authUserSession()
   return (
      <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
         <h5 className="text-2xl font-bold">Halo, Selamat Datang {user.name}</h5>
         <Image src={user.image} alt={`User Image ${user.name}`} width={250} height={250} />
         <div className="flex flex-wrap gap-4 py-8">
            <Link className="bg-color-accent text-color-dark font-bold px-4 py-3 text-left" href={`/users/collection`}>
               My Collection
            </Link>
            <Link className="bg-color-accent text-color-dark font-bold px-4 py-3 text-left" href={`/users/comment`}>
               My Comment
            </Link>
         </div>
      </div>
   )
}

export default Page