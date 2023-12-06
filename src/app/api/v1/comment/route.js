import prisma from "@/libs/prisma";

export async function POST(request) {
   try {
      const {anime_mal_id, user_email, comment, username, anime_name} = await request.json();

      const data = {
         anime_mal_id,
         comment,
         username,
         user_email,
         anime_name
      }

      const createComment = await prisma.tb_Comment.create({ data })

      return Response.json({
         status: 200,
         message: "Successfully Comment this Anime"
      });
   } catch (error) {
      console.log('API COMMENT');
      console.log(error);
      console.log('====================================');
      return Response.json({
         status: 500,
         message: error.error
      });
   }
}

export async function DELETE(request) {
   try {
      const {id} = await request.json();

      const deleteComment = await prisma.tb_Comment.delete({
         where: {
            id: id
         }
      })

      return Response.json({
         status: 200,
         message: "Successfully Delete Comment"
      });
   } catch (error) {
      console.log('API DELETE COMMENT');
      console.log(error);
      console.log('====================================');
      return Response.json({
         status: 500,
         message: error.error
      });
   }
}