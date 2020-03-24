import React from 'react';
import styled, { css } from 'styled-components';
import { values, centeredFlex } from '../../lib/style';
import palette from '../../lib/palette';

const StyledButton = styled.div`
  ${centeredFlex}
  cursor: pointer;
  outline: none;
  background: white;
  border: 1.5px solid black;
  border-radius: ${values.common.borderRadius};
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;

  &:hover {
    color: ${palette.gray[0]};
  }

  ${props =>
    props.active &&
    css`
      background: black;
      color: white;
    `}
`;

const ButtonBlock = styled(StyledButton)`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

const RectangleButtonBlock = styled(StyledButton)`
  width: ${props => props.size || values.button.width};
  height: ${props => props.size || values.button.width};
`;

const Button = ({ children, ...props }) => {
  return props.rectangle ? (
    <RectangleButtonBlock {...props}>{children}</RectangleButtonBlock>
  ) : (
    <ButtonBlock {...props}>{children}</ButtonBlock>
  );
};

export default Button;
