import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {
   const scrollTop = () => {
      scrollTo({
         behavior: 'smooth',
         top: 0,
      })
   }
   const handleNextPage = () => {
      setPage((prevState) => prevState + 1)
      scrollTop()
   }

   const handlePrevPage = () => {
      setPage((prevState) => prevState - 1)
      scrollTop()
   }

   const goToLastPage = () => {
      setPage(lastPage)
   }

   return (
      <div className='flex justify-center items-center px-2 py-4 gap-4 text-color-primary text-xl'>
         {page <= 1 ? null : (
            <button className='transition-all hover:text-color-accent' onClick={handlePrevPage}>Prev</button>
         )}

         <p>{page} of <span onClick={goToLastPage}>{lastPage}</span></p>

         {page >= lastPage ? null : (
            <button className='transition-all hover:text-color-accent' onClick={handleNextPage} disabled={page == lastPage}>Next</button>
         )}
      </div>
   )
}

export default Pagination
