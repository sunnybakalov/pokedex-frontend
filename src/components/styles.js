import styled from 'styled-components';

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
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    text-transform: none;
    font-size: 11px;
    text-align: center;
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
