const ListDataProfileAnime = (data, type = null) => {
   const totalData = data.length;
   let valueGenre = "";

   if (totalData > 0) {
      data.map((vData, kData) => {
         if (type == 'SingleData') {
            if (kData == (totalData - 1)) {
               valueGenre += `${vData}`;
            } else {
               valueGenre += `${vData}, `;
            }
         } else {
            if (kData == (totalData - 1)) {
               valueGenre += `${vData.name}`;
            } else {
               valueGenre += `${vData.name}, `;
            }
         }
      })
   } else {
      valueGenre += "Tidak diketahui";
   }

   return valueGenre;
}

export default ListDataProfileAnime;