import styled from 'styled-components';
import Select from 'react-select';

export const NavBar = styled.div`
  overflow: hidden;
  background-color: #313131;
  position: fixed;
  top: 0;
  width: 100%;
  height: 180px;

  #searchInput {
    position: relative;
    vertical-align: top;
    background-color: #fff;
    width: 310px;
    height: 40px;
    margin-top: 5px;
  }

  #nameOrNumberText {
    font-size: 26px;
    color: #fff;
  }
  
  #inputDiv {
    display: flex;
    flex-direction: column;
    padding-left: 195px;
    padding-top: 15px;
  }
`;

export const ScrollButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;

  .scrollToTop {
    position: fixed; 
    bottom: 20px;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }

  .scrollToTop:hover{
    opacity: 1;
  }
`;

export const SurpriseMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  background-color: #30a7d7;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 105%;
  vertical-align: middle;
  text-align: center;
  text-transform: none;
  font-family: "Flexo-Demi",arial,sans-serif;
  height: 50px;
  width: 350px;

  #refresh {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const SortBy = styled.select`
  background-color: #313131;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 200px;
  display: block;
  font-size: 100%;
  font-family: "Roboto",arial,sans-serif;
  line-height: 1.5;
  padding: 0.5em 0;
  text-indent: 0.5em;
  width: 350px;
  height: 40px;
`;
