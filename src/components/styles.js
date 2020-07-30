import styled from 'styled-components';

const getColor = props => {
  if (props.type === "grass") {
    return '#9BCB50';
  } else if (props.type === "poison") {
    return '#b97ec9';
  } else if (props.type === "fire") {
    return '#fd7c24';
  } else if (props.type === "water") {
    return '#4592c4';
  } else if (props.type === "flying") {
    return 'linear-gradient(180deg, rgba(189,185,184,1) 50%, rgba(61,199,239,1) 50%)';
  } else if (props.type === "bug") {
    return '#729f3f';
  } else if (props.type === "normal") {
    return '#a3acae';
  } else if (props.type === "electric") {
    return '#eed534';
  } else if (props.type === "ground") {
    return 'linear-gradient(180deg, rgba(238,213,52,1) 50%, rgba(171,152,66,1) 50%);';
  } else if (props.type === "fairy") {
    return '#fdb9e9';
  } else if (props.type === "fighting") {
    return '#d56724';
  } else if (props.type === "psychic") {
    return '#f466b9';
  } else if (props.type === "rock") {
    return '#a38c20';
  } else if (props.type === "steel") {
    return '#9eb7b8';
  } else if (props.type === "ice") {
    return '#3dc7ef';
  } else if (props.type === "ghost") {
    return '#7B62A3';
  } else if (props.type === "dragon") {
    return 'linear-gradient(180deg, rgba(83,164,207,1) 50%, rgba(241,110,86,1) 50%);';
  } else if (props.type === "dark") {
    return '#6F6F6F';
  };
  return '';
};

export const ContainerCard = styled.div`
  margin: 5px;
  padding: 5px;

  img {
    width: 200px;
    height: 200px;
    padding: 5px;
    background-color: #F2F2F2;
  }

  #name,
  #number,
  #typesDiv {
    margin-left: 10px;
    line-height: 125%;
  }

  #name {
    margin-top: 15px;
    margin-bottom: 5px;
    color: #313131;
    font-size: 145%;
    font-family: "Courier";
  }

  #number {
    margin-top: 0;
    color: #919191;
    font-weight: 500;
    font-size: 80%;
  }

  #typesDiv {
    display: inline-flex;
  }

  #types {
    margin-top: 0;
    width: 70px;
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    text-transform: none;
    font-size: 11px;
    text-align: center;
    background-color: ${props => getColor(props)};
  }

  &:hover {
    transition: all .4s ease-in-out;
    transform: scale(1.1);
    box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.75);
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: 35px auto 0 auto;
`;
