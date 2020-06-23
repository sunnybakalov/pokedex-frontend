import React, { useState } from 'react';
import { SpriteCard } from './styles';
import { fetchAll, searchPokemon } from '../lib/client';
import PokemonCard from './PokemonCard';

// const allPokemon = async () => await fetchAll;
const pikachu = async () => await searchPokemon("pikachu");

const renderCards = async () => {
  const allPokemon = await fetchAll();
  
  return (allPokemon.map(pokemon => (
      <PokemonCard 
        name={pokemon.name}
        height={pokemon.height}
        width={pokemon.width}
        types={pokemon.types}
      />
  )))
}

const SpritesContainer = () => {
  return (
    <>
      <div>
        {renderCards}
      </div>
    </>
  )
};

export default SpritesContainer;
