import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full px-4 py-2 '>
      <Link href='/'>
        <img src='/CatwikiLogo.svg'/>
      </Link>
    </div>
  )
}

export default Navbar
