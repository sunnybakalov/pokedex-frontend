import styled from 'styled-components';

export const ContainerCard = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid grey;
  text-align: center;

  img {
    width: 250px;
    height: 250px;
  }

  &:hover {
    transition: all .4s ease-in-out;
    transform: scale(1.1);
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: 35px auto 0 auto;
`;
