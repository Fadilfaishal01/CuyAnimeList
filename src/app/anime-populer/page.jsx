"use client"
import CardList from "@/components/CardAnimeList";
import HeaderMenu from "@/components/Utils/HeaderMenu";
import Pagination from "@/components/Utils/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Populer = () => {
    const [page, setPage] = useState(1)
    const [topAnimeList, setTopAnimeList] = useState([])

    const fetchData = async () => {
      const data = await getAnimeResponse('top/anime', `page=${page}`)
      setTopAnimeList(data);
    }

    useEffect(() => {
      fetchData()
    }, [page])

    return (
      <>
        <HeaderMenu title="Anime Terpopuler" />
        <CardList dataAnime={topAnimeList} />
        <Pagination page={page} setPage={setPage} lastPage={topAnimeList.pagination?.last_visible_page} />
      </>
    );
};

export default Populer;
