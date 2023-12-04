/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: "cdn.myanimelist.net", // https://cdn.myanimelist.net
         },
         {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com' // https://avatars.githubusercontent.com
         }
      ]
   }
}

module.exports = nextConfig
