export const getAnimeResponse = async (resource, query) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`)
   const data = await response.json()

   return data
}