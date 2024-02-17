import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="px-2 w-full">
    <div className="bg-black text-white rounded-t-[44px] px-4 py-6 justify-center items-center flex flex-col">
      <img src="/CatLogoWhite.svg"/>
      <div className="flex items-center mt-2 justify-center">
        <FaRegCopyright  className="w-4 h-4 mr-2"/>
        <p className="text-sm">Created by <a href='https://github.com/Juanalv1' className='text-white border-b border-b-white pb-0.5 font-bold'>Juan</a> - Devchallenge.io 2024</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
