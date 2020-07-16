import React, { useEffect, useState } from 'react';
import { PokeContainer } from './styles';
import { fetchAll } from '../lib/client';
import PokemonCard from './PokemonCard';

function SpritesContainer() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetch() {
      const allPokemon = await fetchAll();
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
