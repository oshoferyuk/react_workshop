import React from 'react';
import H2 from 'components/H2';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
          <H2>Home</H2>
          </HeaderLink>
          <HeaderLink to="/features">
          <H2>Features</H2>
          </HeaderLink>
          <HeaderLink to="/old">
          <H2>Old</H2>
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
