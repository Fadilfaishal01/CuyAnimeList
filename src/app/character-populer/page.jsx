"use client"

import CardAnimeList from '@/components/CardAnimeList'
import HeaderMenu from '@/components/Utils/HeaderMenu'
import Pagination from '@/components/Utils/Pagination'
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '@/libs/api-libs'

const CharacterPopulerPage = () => {
   const [page, setPage] = useState(1)
   const [topCharacters, setTopCharacters] = useState([])

   const fetchData = async () => {
     const data = await getAnimeResponse('top/characters', `page=${page}`)
     setTopCharacters(data);
   }

   useEffect(() => {
     fetchData()
   }, [page])

   return (
     <>
       <HeaderMenu title="Characters Terpopuler" />
       <CardAnimeList dataAnime={topCharacters} type="Top Characters" />
       <Pagination page={page} setPage={setPage} lastPage={topCharacters.pagination?.last_visible_page} />
     </>
   );
}

export default CharacterPopulerPage
