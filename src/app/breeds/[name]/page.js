"use client"
import CatLevels from '@/app/components/CatLevels.js'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'


const Page = ({params}) => {
  const [breed, setBreed] = useState({})
  const {name} = params
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://catwikiapi-jet.vercel.app/breeds/${name}`)
      const data = await res.json()
      setBreed(data)
    }
    fetchData()
  }, [])
  console.log(breed)

  return (
    <main className='text-[#291507] xl:px-24'>
      <Navbar />
        {breed && (
        <>
          <section className='px-4 py-4 flex flex-col lg:flex-row'>  
          <div className='w-full flex items-center justify-center lg:w-1/2'>
            <img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} className='lg:w-2/3 rounded-xl'/>
          </div>
          <div className='mt-4 flex flex-col gap-y-2 lg:w-1/2'>
            <h1 className='font-bold text-xl lg:text-3xl'>{breed.name}</h1>
            <p className=''>
              {breed.description}
            </p>
            <div className='mt-4'>
              <ul className='flex flex-col gap-y-2'>
                <li className='flex font-bold'>Temperament: <span className='ml-2 lg:ml-4 font-normal'>{breed.temperament}</span></li>
                <li className='flex font-bold'>Origin: <span className='ml-2 lg:ml-4 font-normal'>
                  {breed.origin}</span></li>
                <li className='flex font-bold'>
                  Lifespan: <span className='ml-2 lg:ml-4 font-normal'>
                    {breed.life_span} Years
                  </span>
                </li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Adaptability:<span><CatLevels lvl={breed.adaptability}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Affection level:<span><CatLevels lvl={breed.affection_level}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Child friendly:<span><CatLevels lvl={breed.child_friendly}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Grooming:<span><CatLevels lvl={breed.grooming}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Intelligence:<span><CatLevels lvl={breed.intelligence}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Health_issues:<span><CatLevels lvl={breed.health_issues}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Social needs:<span><CatLevels lvl={breed.social_needs}/></span></li>
                <li className='flex items-center gap-x-2 lg:gap-x-4 font-bold '>Stranger friendly:<span><CatLevels lvl={breed.stranger_friendly}/></span></li>
              </ul>
            </div>
          </div>
        </section> 
        <section className='w-full flex flex-col  mb-10 pb-4 lg:px-12 lg:mt-4'>
          <h2 className='font-bold text-2xl my-2 px-4 lg:py-6'>Other Photos</h2>
          <div className='grid grid-cols-2 w-full gap-y-4 gap-x-2 px-6 lg:grid-cols-4 '>
          {breed && breed.imagesUrls && breed.imagesUrls.map((url, index) => (
          <img src={url} key={index} alt="" className=' w-36 h-36 rounded-lg object-cover'/>
          ))}
          </div>
        </section>
       </>
      )}
      <Footer />
    </main>
  )
}

export default Page

