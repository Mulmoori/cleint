// style.ts
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
  }
`;

export const MenuItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    border-bottom: 1px solid #eaeaea;

    &:last-child {
      border-bottom: none;
    }
  }
`;
