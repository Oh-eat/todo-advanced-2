import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {
  todoViewerItemWideBlock,
  centeredFlex,
  hoverColor,
} from '../../lib/style';
import Spacer from '../common/Spacer';
import Button from '../common/Button';
import dateToString from '../../lib/dateToString';

const SearchViewerItemBlock = styled.div`
  ${todoViewerItemWideBlock}
  display: flex;
  flex-direction: column;

  .title {
    ${centeredFlex}
    justify-content: space-between;
    width: calc(100% -2rem);
    height: 5rem;

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
      margin: 0;
      margin-right: 1rem;
    }
    width: 100%;
    height: 5rem;
  }

  .detail {
    ${centeredFlex}
    flex-direction:column;
    width: 100%;

    .dDay,
    .body {
      ${centeredFlex}
      margin-left:1rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const SearchViewerItem = ({ todo, showModals }) => {
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
    <SearchViewerItemBlock>
      <div
        className="title"
        onClick={toggleDetail}
        onMouseEnter={showActions}
        onMouseLeave={hideActions}
      >
        <div className="left"></div>
        <div className="center">
          <h2>#{todo.title}</h2>
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
      <div className="detail">
        {detail && (
          <>
            <h3 className="dDay">
              <FaRegCalendarAlt size="1.25rem" />
              <Spacer width="0.25rem" />
              {dateToString(todo.dDay)}
            </h3>
            <div className="body">{todo.body}</div>
          </>
        )}
      </div>
    </SearchViewerItemBlock>
  );
};

export default SearchViewerItem;
