import { css } from 'styled-components';
import palette from './palette';

export const values = {
  header: {
    height: '5rem',
  },
  toolbar: {
    height: '2.5rem',
  },
  button: {
    width: '3rem',
    height: '1.75rem',
  },
  nav: {
    height: '5rem',
  },
  common: {
    borderRadius: '7px',
  },
};

export const centeredFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputStyle = css`
  border: 1px solid ${palette.gray[0]};
  border-radius: ${values.common.borderRadius};
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;

  &:hover {
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 255, 0.3);
  }

  ${props =>
    props.error &&
    css`
      box-shadow: 0px 0px 6px 1px rgba(255, 0, 0, 0.3);
    `}
`;

export const hoverColor = css`
  cursor: pointer;

  &:hover {
    color: ${props => (props.empty ? palette.gray[1] : palette.gray[0])};
  }
`;

export const todoViewerWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  height: calc(100% - (${values.toolbar.height} + 1rem));
`;

const todoViewerBlock = css`
  display: flex;
  width: 100%;
  overflow-y: auto;
`;
export const todoViewerGridBlock = css`
  ${todoViewerBlock}
  flex-wrap: wrap;
`;
export const todoViewerVerticalBlock = css`
  ${todoViewerBlock}
  flex-direction:column;
  align-items: flex-start;
`;

const todoViewerItemBlock = css`
  ${centeredFlex}
  box-sizing: border-box;
  border: 1px solid black;
  color: black;
  border-radius: ${values.common.borderRadius};
  user-select: none;

  h2 {
    font-size: 3rem;
  }

  ${props =>
    props.empty &&
    css`
      border: 1px solid ${palette.gray[1]};
      color: ${palette.gray[1]};
    `}

  ${props =>
    props.hidden &&
    css`
      visibility: hidden;
    `}
`;

export const todoViewerItemNarrowBlock = css`
  ${todoViewerItemBlock}
`;

export const todoViewerItemWideBlock = css`
  ${todoViewerItemBlock}
  width: 100%;

  & + & {
    margin-top: 0.5rem;
  }
`;
