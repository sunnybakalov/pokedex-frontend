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

  useEffect(() => {
    console.log("show", showPokemon)
  }, [showPokemon])

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

  function randomizePokemon() {
    for(let i = showPokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [showPokemon[i], showPokemon[j]] = [showPokemon[j], showPokemon[i]];
    };
    setShowPokemon(showPokemon);
  };

  const sortBy = (value) => {
    switch(value) {
      case "lowestNumber":
        let lowestNumber = showPokemon.sort((pokemon1, pokemon2) =>
          pokemon1.number > pokemon2.number ? 1 : -1
        );
        setShowPokemon(lowestNumber);
        break;
      case "highestNumber":
        let highestNumber = showPokemon.sort((pokemon1, pokemon2) =>
          pokemon1.number < pokemon2.number ? 1 : -1
        );
        setShowPokemon(highestNumber);
        break;
      case "aZ":
        let aZ = showPokemon.sort((pokemon1, pokemon2) =>
          pokemon1.name > pokemon2.name ? 1 : -1
        );
        setShowPokemon(aZ);
        break;
      case "zA":
        let zA = showPokemon.sort((pokemon1, pokemon2) =>
          pokemon1.name < pokemon2.name ? 1 : -1
        );
        setShowPokemon(zA);
        break;
    }
  };

  function checkScrollToTop() {
    if(!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    };
  };

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  function renderCards() {
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
          <label id="nameOrNumberText">Search By Name</label>
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
        <SurpriseMeButton
          onClick={randomizePokemon}
        >
          <img src={require("../images/refresh.png")} alt="" id="refresh"/>
          Surprise me!
        </SurpriseMeButton>
        <SortBy
          onChange={e => sortBy(e.target.value)}
        >
          <option
            value="lowestNumber"
          >
            Lowest Number (First)
          </option>
          <option
            value="highestNumber"
          >
            Highest Number (First)
          </option>
          <option
            value="aZ"
          >
            A-Z
          </option>
          <option
            value="zA"
          >
            Z-A
          </option>
        </SortBy>
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
