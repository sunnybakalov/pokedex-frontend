import React from 'react';
import { ContainerCard, Types } from './styles';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function numberFormatter(num) {
  let number = num.toString();

  if(number.length === 1) {
    return `#00${number}`;
  } else if(number.length === 2) {
    return `#0${number}`;
  } else {
    return `#${number}`;
  };
};

const PokemonCard = (props) => {
  return (
    <ContainerCard>
      <img src={require(`../images/${props.number}.png`)} alt="pokemon" />
      <div>
        <p id="number">{numberFormatter(props.number)}</p>
        <h5 id="name">{props.name.capitalize()}</h5>
      </div>
      <div id="typesDiv">
        {props.types.map(type => {
          // console.log("TYPE", type)
          return <p type={type} id="types">{type}</p>
          return <p id="types" type={type}>{type}</p>
        })}
      </div>
    </ContainerCard>
  );
};

export default PokemonCard;
