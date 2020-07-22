import styled from 'styled-components';

export const ContainerCard = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid grey;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: auto;
`;