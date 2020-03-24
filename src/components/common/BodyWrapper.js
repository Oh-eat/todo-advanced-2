import React from 'react';
import styled from 'styled-components';
import { values } from '../../lib/style';

const BodyWrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${values.header.height});
  width: calc(1024px - 4rem);
  margin: auto;

  @media (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 2rem;
    width: auto;
  }
`;

const BodyWrapper = ({ children }) => {
  return <BodyWrapperBlock>{children}</BodyWrapperBlock>;
};

export default BodyWrapper;
