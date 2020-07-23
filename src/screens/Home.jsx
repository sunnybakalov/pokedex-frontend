import React, { useEffect, useState } from 'react';
import { fetchAll } from '../lib/client';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { PokeContainer } from '../components/styles';

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  useEffect(() => {
    async function fetch() {
      return await fetchAll();
    }
    fetch().then((res) => {
      const allPokemon = res.sort((pokemon1, pokemon2) =>
        pokemon1.number > pokemon2.number ? 1 : -1
      );
      setPokemon(allPokemon);
    });
  }, []);

  useEffect(() => {
    console.log('UPDATING');
  }, [searchedPokemon]);

  function onKeyUp(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      setSearchedPokemon(e.target.value);
    }
  }

  function searchPokemon(e) {
    // console.log("EVENT", e.target)
    const filteredPokemon = pokemon.filter((poke) => {
      // console.log("Poke", poke)
      return poke.name.includes(e.target.value.toLowerCase());
    });
    setPokemon(filteredPokemon);
    setSearchedPokemon(e.target.value);
    // console.log("SEARCHED", searchedPokemon);
    // console.log("FILTERED", filteredPokemon);
  }

  const renderCards = () => {
    return (
      <PokeContainer>
        {searchedPokemon instanceof String
          ? searchedPokemon.map(
              (poke) => (
                (
                  <PokemonCard
                    name={poke.name}
                    height={poke.height}
                    weight={poke.weight}
                    types={poke.types}
                    number={poke.number}
                  />
                ),
                console.log('SEARCHED', searchedPokemon)
              )
            )
          : pokemon.map((poke) => (
              <PokemonCard
                name={poke.name}
                height={poke.height}
                weight={poke.weight}
                types={poke.types}
                number={poke.number}
              />
            ))}
        ;
      </PokeContainer>
    );
  };

  return (
    <div>
      <SearchBar
        onChange={(e) => searchPokemon(e)}
        value={searchedPokemon instanceof Object ? '' : searchedPokemon}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyUp}
      />
      <div>{renderCards()}</div>
    </div>
  );
}

export default Home;
