import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import {
  todoViewerItemWideBlock,
  centeredFlex,
  hoverColor,
} from '../../lib/style';
import Spacer from '../common/Spacer';
import Button from '../common/Button';

const HourViewerItemBlock = styled.div`
  ${todoViewerItemWideBlock}
  display: flex;
  flex-direction: column;

  .hour {
    ${centeredFlex}
    ${hoverColor}
    width: 100%;
    height: 5rem;
  }

  .todos {
    width: 100%;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% -2rem);
  flex-direction: column;
  margin: 1rem;

  .head {
    ${centeredFlex}
    justify-content: space-between;
    font-size: 1.25rem;

    .center {
      ${centeredFlex}
      ${hoverColor}
      width: 80%;
    }

    .left,
    .right {
      ${centeredFlex}
      justify-content: flex-end;
      width: 10%;
      height: 100%;
      margin: 0;
    }
  }

  .body {
    ${centeredFlex}
    user-select: text;
    margin-top: 0.5rem;
  }

  & > div + & > div {
    margin-top: 0.5rem;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const TodoItem = ({ todo, showModals }) => {
  const [detail, setDetail] = useState(false);
  const [actions, setActions] = useState(false);

  const todoEdit = e => {
    e.stopPropagation();
    showModals('edit', todo);
  };
  const todoRemove = e => {
    e.stopPropagation();
    showModals('delete', todo);
  };
  const toggleDetail = () => setDetail(detail => !detail);
  const showActions = () => setActions(true);
  const hideActions = () => setActions(false);

  return (
    <TodoItemBlock onMouseEnter={showActions} onMouseLeave={hideActions}>
      <div className="head" onClick={toggleDetail}>
        <div className="left"></div>
        <div className="center">
          <b>{`${todo.dDay.getMinutes()}분: `}</b>
          <Spacer width="0.5rem" />
          {todo.title}
        </div>
        <div className="right">
          {(actions || detail) && (
            <>
              <Button rectangle size="1.5rem" onClick={todoEdit}>
                <FiEdit size="1rem" />
              </Button>
              <Spacer width="0.2rem" />
              <Button rectangle size="1.5rem" onClick={todoRemove}>
                <FiTrash2 size="1rem" />
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="body">{detail && todo.body}</div>
    </TodoItemBlock>
  );
};

const HourViewerItem = ({ hour, todos, showModals }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(state => !state);

  return (
    <HourViewerItemBlock>
      <div className="hour" onClick={toggleVisible}>
        <h2>{hour}시</h2>
      </div>
      <div className="todos">
        {visible &&
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} showModals={showModals} />
          ))}
      </div>
    </HourViewerItemBlock>
  );
};

export default HourViewerItem;
