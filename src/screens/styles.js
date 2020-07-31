import styled from 'styled-components';

export const NavBar = styled.div`
  overflow: hidden;
  background-color: #313131;
  position: fixed;
  top: 0;
  width: 100%;
  height: 180px;
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
