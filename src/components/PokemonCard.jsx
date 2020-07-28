import React from 'react';
import { ContainerCard } from './styles';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const PokemonCard = (props) => {
  return (
    <ContainerCard>
      <img src={require(`../images/${props.number}.png`)} alt="pokemon" />
      <div>
        <p id="number">{`#${props.number}`}</p>
        <h5 id="name">{props.name.capitalize()}</h5>
      </div>
      <div id="typesDiv">
        {props.types.map(type => {
          return <p id="types">{type}</p>
        })}
      </div>
    </ContainerCard>
  );
};

export default PokemonCard;
