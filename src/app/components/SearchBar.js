import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import React from 'react'
import SearchList from './SearchList';

const SearchBar = () => {
  const [searchValue, setSearchValue ] = useState('')
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect( () =>  {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await fetch('https://catwikiapi-jet.vercel.app/breeds?onlynames=true');
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value
    setSearchValue(inputValue);
    const filtered = results.filter((breed) =>
    breed.name.toUpperCase().includes(inputValue.toUpperCase())
  )
  setFilteredResults(filtered);
  }

  return (
    <div className="flex items-center gap-x-2 rounded-2xl bg-white px-4 py-2 justify-center relative w-1/2">
      <input type="text"  className="outline-none rounded-lg placeholder:text-[#291507] w-[90%] text-black" placeholder="Search" onChange={handleChange}/>
      <IoSearch className="w-5 h-5 text-black"/>
      {filteredResults.length > 0 && searchValue && (
       <SearchList filtered={filteredResults} />)}
    </div>
  )}

export default SearchBar
