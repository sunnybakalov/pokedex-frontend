import React, { useEffect, useState } from 'react';
import { fetchAll } from '../lib/client';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { PokeContainer } from '../components/styles';

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [showPokemon, setShowPokemon] = useState([]);

  useEffect(() => {
    async function fetch() {
      return await fetchAll();
    }
    fetch().then((res) => {
      const allPokemon = res.sort((pokemon1, pokemon2) =>
        pokemon1.number > pokemon2.number ? 1 : -1
      );
      setPokemon(allPokemon);
      setShowPokemon(allPokemon);
    });
  }, []);

  function onKeyUp(e) {
    setSearchedPokemon(e.target.value);
    searchPokemon(e.target.value);
  }

  function searchPokemon(input) {
    const filteredPokemon = pokemon.filter((poke) => {
      return poke.name.includes(input.toLowerCase());
    });
    setShowPokemon(filteredPokemon);
  }

  const renderCards = () => {
    return (
      <PokeContainer>
        {showPokemon &&
          showPokemon.map((poke) => (
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

  return (
    <div>
      <input
        onChange={(e) => onKeyUp(e)}
        value={searchedPokemon}
        onKeyUp={(e) => onKeyUp(e)}
        onKeyDown={(e) => onKeyUp(e)}
      />
      <div>{renderCards()}</div>
    </div>
  );
}

export default Home;
