"use client";

import { useState } from 'react'
import { SearchManufacturer } from './'
import React from 'react'
import Image from 'next/image'

const SearchButton = ({ otherClasses }: {otherClasses: string })=> (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const[manufacturer, setManufacturer] = useState('');
  const[model, setModel] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      alert('Please enter a manufacturer and model');
      return;
    }

    }

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }
      
      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }

      const newPath = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, '', newPath);
    }


  return (
    <form className='searchbar' onSubmit=
    {handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />  
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            alt="model icon"
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name='model'
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="searchbar__input"
          />
          <SearchButton
            otherClasses="sm:hidden"
          />
          <SearchButton
            otherClasses="max-sm:hidden"
          />
        </div>
    </form>
  )
}

export default SearchBar
