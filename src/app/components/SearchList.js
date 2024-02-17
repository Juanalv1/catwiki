import React from 'react'
import Link from 'next/link'


const SearchList = ({ filtered }) => {
  console.log(filtered)
  console.log(filtered[0].name)
  return (
    <ul className="flex flex-col  absolute top-12 bg-white w-full z-50 text-black rounded-lg  ">
      {filtered && filtered.slice(0, 10).map((breed, index) => (
        <li className='flex hover:bg-gray-300 px-3 py-2 rounded-lg' key={index}>
          <Link href={`/breeds/${breed.name}`}>{breed.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SearchList
