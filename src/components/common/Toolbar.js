import React from 'react';
import styled from 'styled-components';
import { values } from '../../lib/style';

const ToolbarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${values.toolbar.height};

  .left,
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .left > * {
    margin-left: 0.5rem;

    &:first-child {
      margin: 0;
    }
  }

  .right > * {
    margin-right: 0.5rem;

    &:last-child {
      margin: 0;
    }
  }
`;

const Toolbar = ({ children }) => {
  return <ToolbarBlock>{children}</ToolbarBlock>;
};

export default Toolbar;
