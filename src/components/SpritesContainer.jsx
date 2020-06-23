import React, { useState } from 'react';
import { PokemonCard, SpriteCard } from './styles';
import { fetchAll } from '../lib/client';

// const allPokemon = async () => await fetchAll;

const renderCards = async () => {
  const allPokemon = await fetchAll();
  
  return allPokemon.map(pokemon => (
      <div>
        <div>
          <h3>{pokemon.name}</h3>
          <p>{pokemon.types}</p>
          <span>Weight: {pokemon.weight} | Height: {pokemon.height}</span>
          <text>Moves: {pokemon.moves}</text>
        </div>
      </div>
  ))
}

const SpritesContainer = () => {
  return (
    <div>
      {renderCards()}
    </div>
  )
};

export default SpritesContainer;
