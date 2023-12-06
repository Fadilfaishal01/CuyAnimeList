import prisma from "@/libs/prisma";

export async function POST(request) {
   try {
      const {anime_mal_id, user_email, anime_image, anime_title, anime_genres} = await request.json();

      const data = {
         anime_mal_id,
         anime_title,
         anime_image,
         anime_genres,
         user_email,
      }

      const createCollection = await prisma.tb_Collection.create({ data })

      return Response.json({
         status: 200,
         message: "Successfully Add Anime to Collection"
      });
   } catch (error) {
      return Response.json({
         status: 500,
         message: error.error
      });
   }
}