import React from 'react';
import { ContainerCard } from './styles';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const PokemonCard = (props) => {
  return (
    <ContainerCard>
      <h3 id="name">{props.name.capitalize()}</h3>
      <img src="https://via.placeholder.com/240x240" alt="pokemon" />
      <br/>
      <span id="measurements">{`HT: ${props.height} | WT: ${props.weight}`}</span>
      <div>
        {props.types.map(type => {
          return <span id="types">{type}</span>
        })}
      </div>
    </ContainerCard>
  );
};

export default PokemonCard;
