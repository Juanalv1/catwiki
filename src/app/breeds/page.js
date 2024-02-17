"use client"
import React, { useEffect, useState } from 'react'
import TopCard from '../components/TopCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  const [breeds, setBreeds] = useState([])
  const fetchData = async () => {
    const res = await fetch('https://catwikiapi-jet.vercel.app/breeds?limit=5')
    const data = await res.json()
    setBreeds(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <main className='lg:px-12'>
      <Navbar />
      <section className='px-6 py-4 text-[#291507] lg:py-8'>
        <h1 className='text-3xl font-bold'>Top 5 most searched breeds</h1>
        <div className='flex flex-col  mt-6 px-6 gap-y-4'>
          {breeds && breeds.length > 0 && breeds.map((breed, index) => (
            <TopCard breed={breed} key={index} index={index}/>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default page
