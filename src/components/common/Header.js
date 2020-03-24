import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/palette';
import { centeredFlex } from '../../lib/style';

const HeaderBlock = styled.div`
  ${centeredFlex}
  width: 100%;
  user-select: none;

  h1 {
    font-size: 3rem;

    &:hover {
      color: ${palette.gray[0]};
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">
        <h1>TODO-LIST</h1>
      </Link>
    </HeaderBlock>
  );
};

export default Header;
