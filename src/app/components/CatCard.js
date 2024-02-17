import React from 'react'

const CatCard = ({imgid, name}) => {
  return (

      <div className=' w-32 h-36 lg:w-56 lg:h-56 flex flex-col justify-center items-center'>
        <img src={`https://cdn2.thecatapi.com/images/${imgid}.jpg`} className='rounded-lg w-32 h-32 lg:w-52  lg:h-52 object-cover min-h-52'/>
        <h3 className='mt-2 font-bold text-lg'>{name}</h3>
      </div>

  )
}

export default CatCard
