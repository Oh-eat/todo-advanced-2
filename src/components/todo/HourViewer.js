import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerVerticalBlock,
  values,
} from '../../lib/style';
import getActiveHours from '../../lib/getActiveHours';
import Nav from '../common/Nav';
import HourViewerItem from './HourViewerItem';
import Button from '../common/Button';
import Spacer from '../common/Spacer';
import TodoModal from '../modal/TodoModal';
import DeleteModal from '../modal/DeleteModal';
import EmptyTodos from './EmptyTodos';

const HourViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const HourViewerBlock = styled.div`
  ${todoViewerVerticalBlock}
  height: calc(100% - ${values.nav.height});
`;

const HourViewer = ({ history, year, month, day, todos }) => {
  const [modals, setModals] = useState({ edit: false, delete: false });
  const activeHours = getActiveHours(todos, year, month, day);
  const isEmpty = Object.keys(activeHours).length === 0;
  const activeTodo = useRef(null);

  const changeViewYear = () => history.push('/todos/');
  const changeViewMonth = () => history.push(`/todos/${year}`);
  const changeViewDay = () => history.push(`/todos/${year}/${month}`);

  const showModals = (modal, todo) => {
    setModals(modals => ({ ...modals, [modal]: true }));
    activeTodo.current = todo;
  };
  const hideModals = modal =>
    setModals(modals => ({ ...modals, [modal]: false }));

  return (
    <>
      {modals.edit && (
        <TodoModal
          type="edit"
          closer={() => hideModals('edit')}
          todo={activeTodo.current}
        />
      )}
      {modals.delete && (
        <DeleteModal
          type="delete"
          closer={() => hideModals('delete')}
          todo={activeTodo.current}
        />
      )}
      <HourViewerWrapper>
        <Nav>
          <Button onClick={changeViewYear}>
            <Spacer width="0.25rem" />
            <h3>{year}년</h3>
            <Spacer width="0.25rem" />
          </Button>
          <Spacer width="1rem" />
          <Button onClick={changeViewMonth}>
            <Spacer width="0.25rem" />
            <h3>{month}월</h3>
            <Spacer width="0.25rem" />
          </Button>
          <Spacer width="1rem" />
          <Button onClick={changeViewDay}>
            <Spacer width="0.25rem" />
            <h3>{day}일</h3>
            <Spacer width="0.25rem" />
          </Button>
        </Nav>
        <HourViewerBlock>
          {isEmpty && <EmptyTodos year={year} month={month} day={day} />}
          {isEmpty ||
            [...Object.keys(activeHours)].map(hour => (
              <HourViewerItem
                key={hour}
                year={year}
                month={month}
                day={day}
                hour={hour}
                todos={activeHours[hour]}
                showModals={showModals}
              />
            ))}
        </HourViewerBlock>
      </HourViewerWrapper>
    </>
  );
};

export default withRouter(HourViewer);
