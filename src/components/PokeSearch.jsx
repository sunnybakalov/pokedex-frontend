import React from 'react';
import { fetchAll, searchPokemon } from '../lib/client';

// const search = async () => await searchPokemon("pikachu");
const search = async () => await fetchAll();

const PokeSearch = () => {
  return (
    <>
      <div>
        <button onClick={search}>
          Click Me
        </button>
      </div>
    </>
  )
};

export default PokeSearch;
