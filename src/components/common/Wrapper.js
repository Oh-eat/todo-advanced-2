import React from 'react';
import styled from 'styled-components';
import { values } from '../../lib/style';

const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${values.header.height});
  width: 1024px;
  margin: auto;

  @media (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 2rem;
    width: auto;
  }
`;

const Wrapper = ({ children }) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

export default Wrapper;
