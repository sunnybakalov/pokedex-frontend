import React, { useEffect, useState } from 'react';
import { PokeContainer } from './styles';
import { fetchAll } from '../lib/client';
import PokemonCard from './PokemonCard';

function SpritesContainer() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetch() {
      let allPokemon = await fetchAll();
      allPokemon = allPokemon.sort((pokemon1, pokemon2) => pokemon1.number > pokemon2.number ? 1 : -1);
      console.log('ALL POKEMON', allPokemon);
      setPokemon(allPokemon);
    }
    fetch();
  }, []);

  const renderCards = () => {
    return (
      <PokeContainer>
        {pokemon.map((poke) => (
          <PokemonCard
            name={poke.name}
            height={poke.height}
            weight={poke.weight}
            types={poke.types}
            number={poke.number}
          />
        ))}
      </PokeContainer>
    );
  };

  return <>{renderCards()}</>;
}

export default SpritesContainer;
