import React from 'react';
import './header.css';
import Logo from './Logo'; // Adjust according to export type
import Nav from './Nav';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
}

export default Header;
