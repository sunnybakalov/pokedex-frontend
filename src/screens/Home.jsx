import React, { useEffect, useState } from 'react';
import { fetchAll } from '../lib/client';
import PokemonCard from '../components/PokemonCard';
import { PokeContainer } from '../components/styles';
import { NavBar, ScrollButtonDiv, SortBy, SurpriseMeButton } from './styles';

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [showPokemon, setShowPokemon] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  const sortByOpts = ['Lowst Number (First)', 'Highest Number (First)', 'A-Z', 'Z-A'];

  window.addEventListener('scroll', checkScrollToTop);

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
  };

  function checkScrollToTop() {
    if(!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    };
  };

  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

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
      <NavBar>
        <div id="inputDiv">
          <label id="nameOrNumberText">Name or Number</label>
          <input
            onChange={(e) => onKeyUp(e)}
            value={searchedPokemon}
            onKeyUp={(e) => onKeyUp(e)}
            onKeyDown={(e) => onKeyUp(e)}
            id="searchInput"
          />
        </div>
      </NavBar>
      <div id="surpriseButtonDiv">
        <SurpriseMeButton>
          <img src={require("../images/refresh.png")} alt="" id="refresh"/>
          Surprise me!
        </SurpriseMeButton>
        <SortBy
          options={sortByOpts}
        />
      </div>
      <div>{renderCards()}</div>
      <ScrollButtonDiv>
        <img
          src={require("../images/arrow.png")}
          alt="scrollToTop"
          className="scrollToTop"
          onClick={scrollToTop}
          style={{height: 40, display: showScroll ? 'flex' : 'none'}}
        />
      </ScrollButtonDiv>
    </div>
  );
}

export default Home;
