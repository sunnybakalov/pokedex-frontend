import React from 'react';
import { ContainerCard } from './styles';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const PokemonCard = (props) => {
  return (
    <ContainerCard>
      <h3 id="name">{props.name.capitalize()}</h3>
      {/* <img src={require(`../images/001.png`)} alt="pokemon" /> */}
      <img src={require(`../images/${props.number}.png`)} alt="pokemon" />
      {/* <img src="%PUBLIC_URL%/images/001.png" alt="pokemon" /> */}
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
