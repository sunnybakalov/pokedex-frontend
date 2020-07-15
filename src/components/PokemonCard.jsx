import React from 'react';

const PokemonCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src="https://via.placeholder.com/150x240" alt="pokemon" />
      <span>{`HT: ${props.height} | WT: ${props.weight}`}</span>
      <div>
        <span>
          {/* {props.types.map(type => {
            <span>{type}</span>
          })} */}
          {props.types}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
