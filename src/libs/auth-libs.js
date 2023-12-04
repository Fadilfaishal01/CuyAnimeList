const { authOption } = require("@/app/api/auth/[...nextauth]/route")
const { getServerSession } = require("next-auth")

export const authUserSession = async () => {
   const session = await getServerSession(authOption);
   return session?.user
}