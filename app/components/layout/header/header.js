import React from 'react';
import Logo from './logo/logo';
import Nav from './nav/nav';

const Header = () => {
  return (
    <div className="columns">
      <Logo/>
      <Nav/>
    </div>
  )
};

export default Header;
