import React, { useState } from 'react';
import { fetchAll, searchPokemon } from '../lib/client';

// const search = async () => await searchPokemon("pikachu");
// const search = async () => await fetchAll();


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInput = e => {
    console.log(e)
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Pokemon"
        value={searchTerm}
        onChange={handleInput}
      />
    </div>
  )
};

export default SearchBar;
