import React from 'react'
import Link from 'next/link'

const TopCard = ({breed, index}) => {
  return (
    <div className='flex flex-col gap-y-4 py-4 lg:flex-row'>
      <Link href={`/breeds/${breed.name}`} className='flex flex-col lg:flex-row lg:gap-x-4'>
        <div className='flex flex-col lg:w-1/3'>
          <img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}  className='rounded-2xl max-h-[170px] object-cover'/>
        </div>
        <div className='lg:w-2/3 lg:ml-4'>
          <h2 className='text-2xl lg:text-3xl font-bold mt-4 mb-2'>{index + 1}. {breed.name}</h2>
          <p>{breed.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default TopCard
