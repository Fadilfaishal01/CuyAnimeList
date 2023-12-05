const ListDataProfileAnime = (dataGenre) => {
   const totalData = dataGenre.length;
   let valueGenre = "";

   if (totalData > 0) {
      dataGenre.map((vData, kData) => {
         if (kData == (totalData - 1)) {
            valueGenre += `${vData.name}`;
         } else {
            valueGenre += `${vData.name}, `;
         }
      })
   } else {
      valueGenre += "Tidak diketahui";
   }

   return valueGenre;
}

export default ListDataProfileAnime;