// Navbar.js

import styled from 'styled-components';

interface OMenuProps{
    omenuOpen: boolean;
}


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.second};
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px ${(props) => props.theme.colors.second};
   
`;


export const LogoImg = styled.img`
   width: 15%;

`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const OMenu = styled.div<OMenuProps>`
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    display: ${(props) => (props.omenuOpen ? 'flex' : 'none')};
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.with};
  padding: 0.5rem;
  margin: 0 1rem;
  cursor: pointer;


  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const LoginButton = styled.a`

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
  color: ${(props) => props.theme.colors.with};
 
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  margin: 0 1rem;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.second};
  }
    

`

