import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;