import React from 'react';
import { getPokemon } from '../lib/client';

const searchPokemon = async () => await getPokemon("pikachu");

const PokeSearch = () => {
  return (
    <>
      <div>
        <button onClick={searchPokemon}>
          Click Me
        </button>
      </div>
    </>
  )
};

export default PokeSearch;
