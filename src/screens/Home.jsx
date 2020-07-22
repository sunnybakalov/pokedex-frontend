import React, { useEffect, useState } from 'react';
import { fetchAll } from '../lib/client';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { PokeContainer } from '../components/styles';

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  useEffect(() => {
    async function fetch() {
      return await fetchAll();
      // let allPokemon = await fetchAll();
      // allPokemon = allPokemon.sort((pokemon1, pokemon2) => pokemon1.number > pokemon2.number ? 1 : -1);
      // setPokemon(allPokemon);
      // return allPokemon;
    }
    fetch().then(res => {
      const allPokemon = res.sort((pokemon1, pokemon2) => pokemon1.number > pokemon2.number ? 1 : -1);
      setPokemon(allPokemon);
      // const filteredPokemon = res.filter(poke => {
      //   return poke.toLowerCase().includes(searchedPokemon);
      // });
      // setSearchedPokemon(filteredPokemon);
    })
  }, [searchedPokemon]);

  function searchPokemon(e) {
    // console.log("EVENT", e.target)
    const filteredPokemon = pokemon.filter(poke => {
      console.log("Poke", poke)
      return poke.name.includes(e.target.value.toLowerCase());
    });
    setPokemon(filteredPokemon)
    // console.log("FILTERED", filteredPokemon)
    // setPokemon(filteredPokemon);
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
      <SearchBar onChange={e => searchPokemon(e)} value={searchedPokemon} />
      <div>
        {renderCards()}
      </div>
    </div>
  );
};

export default Home;
