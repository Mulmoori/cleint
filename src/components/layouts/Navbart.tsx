// NavBar.tsx
import React, { useState } from 'react';
import * as S from './style';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NavbarWrapper>
      <S.Logo>물무리</S.Logo>
      <S.HamburgerIcon onClick={toggleMenu}>
        <FaBars />
      </S.HamburgerIcon>
      <S.Menu isOpen={isOpen}>
        <S.MenuItem>메뉴 1</S.MenuItem>
        <S.MenuItem>메뉴 2</S.MenuItem>
        <S.MenuItem>메뉴 3</S.MenuItem>
      </S.Menu>
    </S.NavbarWrapper>
  );
};

export default Navbar;
