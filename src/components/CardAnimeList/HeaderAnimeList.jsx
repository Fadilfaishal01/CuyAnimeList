import React from 'react'
import Link from "next/link"

const HeaderAnimeList = ({titleCardList, route, routeTitle}) => {
  return (
   <div className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-color-primary">{titleCardList}</h1>
      {route && routeTitle ? (
        <Link href={route} className="md:text-xl text-md underline text-color-primary hover:text-color-accent transition-all">{routeTitle}</Link>
      ) : ""}
   </div>
  )
}

export default HeaderAnimeList
