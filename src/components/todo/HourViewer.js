import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerVerticalBlock,
  values,
} from '../../lib/style';
import getActiveHours from '../../lib/getActiveHours';
import HourViewerItem from './HourViewerItem';
import TodoModal from '../modal/TodoModal';
import DeleteModal from '../modal/DeleteModal';
import TodoNav from './TodoNav';
import EmptyTodos from './EmptyTodos';

const HourViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const HourViewerBlock = styled.div`
  ${todoViewerVerticalBlock}
  height: calc(100% - ${values.nav.height});
`;

const HourViewer = ({ year, month, day, todos }) => {
  const [modals, setModals] = useState({ edit: false, delete: false });
  const activeHours = getActiveHours(todos, year, month, day);
  const isEmpty = Object.keys(activeHours).length === 0;
  const activeTodo = useRef(null);

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
        <TodoNav year={year} month={month} day={day} />
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

export default HourViewer;
