import React from 'react';
import styled from 'styled-components';
import { centeredFlex, values } from '../../lib/style';

const NavBlock = styled.div`
  ${centeredFlex}
  width: 100%;
  height: ${values.nav.height};
`;

const Nav = ({ children }) => {
  return <NavBlock>{children}</NavBlock>;
};

export default Nav;
