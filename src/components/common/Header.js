import React from 'react';
import logo from './logo.png';
import '../../styles/common/Header.scss';

function Header() {
  return (
    <div className="header">
      {/*Convertoon로고, Header*/}
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}

export default Header;
