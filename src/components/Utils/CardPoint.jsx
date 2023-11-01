import React from 'react'

const CardPoint = ({ title, score }) => {
  return (
    <div className='w-40 flex flex-col text-center justify-center items-center rounded border border-color-primary p-2'>
      <h3 className='font-semibold'>{title}</h3>
      <p>{score}</p>
    </div>
  )
}

export default CardPoint
