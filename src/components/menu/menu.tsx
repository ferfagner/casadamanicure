import { useState } from 'react';
import { NavbarContainer, LogoImg, MenuIcon, OMenu, MenuItem, LoginButton } from './styledmenu';
import { useAuth } from '../../context/auth';
import Logo from '../../assets/mainlogo.svg'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoImg src={Logo} alt="Logo" /> {/* Substitua pelo caminho real do seu logo */}
      <MenuIcon onClick={toggleMenu}>Menu</MenuIcon>
      <OMenu menuOpen={menuOpen}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/sobre">Sobre Nós</MenuItem>
        <MenuItem href="/lojas">Lojas</MenuItem>
        <MenuItem href="#">Trabalhe Conosco</MenuItem>
        <MenuItem href="#">Contato</MenuItem>
        <LoginButton href={isAuthenticated ? '/dashboard' : '/login'}>Login</LoginButton>
      </OMenu>
    </NavbarContainer>
  );
}
