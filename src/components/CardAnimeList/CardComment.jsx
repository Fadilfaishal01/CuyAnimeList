const CardComment = ({data, type}) => {
   return (
      <div className="w-1/5 h-32 bg-color-primary rounded">
         <h4 className="font-semibold p-2 text-color-dark">{type === 'Anime' ? data.username : data.anime_name}</h4>
         <hr />
         <h6 className="text-color-dark p-2">{data.comment}</h6>
      </div>
   )
}

export default CardComment