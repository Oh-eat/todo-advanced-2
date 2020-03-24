import React from 'react';
import styled from 'styled-components';

const SpacerBlock = styled.div`
  width: ${props => props.width};
`;

const Spacer = ({ children, ...props }) => {
  return <SpacerBlock {...props}>{children}</SpacerBlock>;
};

export default Spacer;
