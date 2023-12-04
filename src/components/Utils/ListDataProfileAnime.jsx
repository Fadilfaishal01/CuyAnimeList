const ListDataProfileAnime = (dataGenre) => {
   const totalData = dataGenre.length;
   let valueGenre = "";

   if (totalData > 0) {
      if (totalData > 1) {
         dataGenre.map((kData, vData) => {
            valueGenre += `${kData.name}, `
         })
      }
   } else {
      valueGenre += "Tidak ada data";
   }

   return `${valueGenre}`;
}

export default ListDataProfileAnime;