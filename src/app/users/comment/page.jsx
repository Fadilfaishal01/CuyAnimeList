import BtnDelete from "@/components/Dashboard/BtnDelete";
import HeaderNavigation from "@/components/Dashboard/HeaderNavigation";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
   const user = await authUserSession()
   const comment = await prisma.tb_Comment.findMany({
      where: {
         user_email: user.email
      },
      orderBy: {
         id: 'desc',
      }
   })

   return (
      <div className="m-4">
         <HeaderNavigation title="My Comment" />
         {
            comment.length > 0 ? (
               <div className="grid grid-cols-2 px-4 py-8 gap-4">
                  {
                     comment.map(valueComment => {
                        return (
                           <div key={valueComment.id} className="flex flex-row justify-between items-center bg bg-color-primary text-color-dark p-4 rounded">
                              <Link href={`/anime/${valueComment.anime_mal_id}`}>
                                 <p className="text-sm">{valueComment.anime_name}</p>
                                 <p className="italic">{valueComment.comment}</p>
                              </Link>
                              <BtnDelete id={valueComment.id} />
                           </div>
                        )
                     })
                  }
               </div>
            ) : (
               <div className="w-full">
                  <h4 className="text-center text-color-primary font-semibold">Tidak ada komentar</h4>
               </div>
            )
         }
      </div>
   )
}

export default Page;