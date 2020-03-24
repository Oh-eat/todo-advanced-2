import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { values, centeredFlex } from '../../lib/style';

const Fullscreen = styled.div`
  ${centeredFlex}
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 30;
`;

const ModalBlock = styled.div`
  background: white;
  border-radius: ${values.common.borderRadius};

  .body {
    margin: 1rem;

    .closer {
      text-align: right;
      cursor: pointer;
    }

    .title {
      ${centeredFlex}
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .children {
      ${centeredFlex}
      flex-direction:column;
    }
  }
`;

const Modal = ({ closer, title, children }) => {
  const close = () => closer();

  return (
    <Fullscreen>
      <ModalBlock>
        <div className="body">
          <div className="closer" onClick={close}>
            <IoMdClose />
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="children">{children}</div>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};

export default Modal;
