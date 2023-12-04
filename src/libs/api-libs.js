export const getAnimeResponse = async (resource, query) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`)
   const data = await response.json()

   return data
}

// Get data yang ingin di map saja, jadi tidak harus double map atau map di dalam map
export const getNestedAnimeResponse = async(resource, objectProp) => {
   const response = await getAnimeResponse(resource);
   return response.data.flatMap(item => item[objectProp])
}

// Get Data Random Rekomendasi
export const reproduceDataRekomendasi = (data, length = 10) => {  
   const first = Math.floor(Math.random() * (data.length - length) + 1);
   const last  = first + length;

   return data.slice(first, last);
}