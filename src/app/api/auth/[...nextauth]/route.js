import NextAuth from 'next-auth'
import githubAuth from 'next-auth/providers/github';

export const authOption = {
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      githubAuth({
         clientId: process.env.NEXT_GITHUB_CLIENT_ID,
         clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET,
      })
   ],
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}