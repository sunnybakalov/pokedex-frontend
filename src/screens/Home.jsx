import React, { useEffect, useState } from 'react';
import { fetchAll } from '../lib/client';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { PokeContainer } from '../components/styles';

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetch() {
      let allPokemon = await fetchAll();
      allPokemon = allPokemon.sort((pokemon1, pokemon2) => pokemon1.number > pokemon2.number ? 1 : -1);
      setPokemon(allPokemon);
    }
    fetch();
  }, []);

  const searchPokemon = e => {
    const filteredPokemon = pokemon.filter(poke => {
      return poke.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setPokemon(filteredPokemon);
    setSearch(e.target.value);
  };

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

  return (
    <div>
      <SearchBar onChange={e => searchPokemon(e)} value={search}/>
      <div>
        {renderCards()}
      </div>
    </div>
  );
};

export default Home;
