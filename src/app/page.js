"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { IoArrowForward, IoSearch, IoSearchOutline } from "react-icons/io5";
import CatCard from "./components/CatCard";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://catwikiapi-jet.vercel.app/breeds?limit=4')
      const data = await res.json()
      setCats(data)
    }
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col  px-2 font-montserrat lg:px-16">
      <Navbar/>
      <section className="w-full bg-[rgb(227,225,220)] text-white rounded-t-[44px] mt-2 flex flex-col lg:mt-12">
        <div className="px-8 py-6  bg-hero-sm bg-cover rounded-t-[44px] bg-right flex flex-col gap-y-4 bg-no-repeat lg:py-36 lg:px-24">
          <div className=" w-2/3 flex flex-col gap-y-6">
            <div className=" ">
              <h1 className=" font-mystery-quest text-xl mb-2 lg:text-5xl">CatWiki</h1>
              <h2 className="lg:text-2xl">Get to know more about your cat breed</h2>
            </div>
            <SearchBar />
          </div>
        </div>
        <div className="text-[#4D270C] px-6 py-4 flex flex-col lg:px-12 lg:py-8">
          <div className="flex flex-col">
           <h2 className=" font-semibold">Most Searched Breeds</h2>
           <div className=" w-16 mt-1 h-1 bg-[#4D270C] rounded"></div>
          </div>

          <p className="text-2xl font-bold mt-4 lg:mb-6">66+ Breeds for you to discover</p>
          <div className="grid grid-cols-2 gap-y-16 mt-4 w-full justify-center items-center place-content-center place-items-center lg:grid-cols-4 lg:mt-8">
            {cats.slice(0, 4).map((cat, index) => (
              <Link href={`http://localhost:3000/breeds/${cat.name}`} key={index}>
                <CatCard name={cat.name} imgid={cat.reference_image_id} />
              </Link>
            ))}
          </div>
          <span className="flex text-gray-600 font-bold items-center justify-center text-xs mt-20 lg:mt-24"><Link href="/breeds" className="flex">SEE MORE <IoArrowForward  className="w-4 h-4 ml-2"/></Link></span>
        </div>
      </section>
      <section className="flex flex-col mt-8 text-[#4D270C] px-4 lg:flex-row gap-x-6">
        <div className="flex flex-col lg:pt-6 xl:justify-center xl:mb-20">
          <div className=" w-16 mb-2 h-1 bg-[#4D270C] rounded ">
        </div>
        <div className="flex">
          <h2 className=" text-5xl font-bold ">Why should you have a cat</h2>
          </div>
          <div className="mt-12">
            <p className="font-semibold">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <span className="flex text-gray-600 font-bold  text-xs mt-4">READ MORE <IoArrowForward  className="w-4 h-4 ml-2"/></span>
          </div>
        </div>
        <div className="grid grid-cols-2  pb-16 gap-x-4 mt-6">
          <div className="flex flex-col gap-y-4">
            <img src="./image 2.png" className="rounded-xl"/>
            <img src="./image 1.png" className="rounded-xl w-[70%] self-end"/>          
          </div>
          <div>
            <img src="./image 3.png" className="rounded-xl"/>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
