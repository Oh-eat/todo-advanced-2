import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerVerticalBlock,
  values,
} from '../../lib/style';
import Nav from '../common/Nav';
import SearchViewerItem from './SearchViewerItem';
import TodoModal from '../modal/TodoModal';
import DeleteModal from '../modal/DeleteModal';
import EmptyTodos from './EmptyTodos';

const SearchViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const SearchViewerBlock = styled.div`
  ${todoViewerVerticalBlock}
  height: calc(100% - ${values.nav.height});
`;

const SearchViewer = ({ todos, value }) => {
  const [modals, setModals] = useState({ edit: false, delete: false });
  const validTodos = todos.filter(
    todo => todo.title.includes(value) || todo.body.includes(value),
  );
  const isEmpty = validTodos.length === 0;
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
      <SearchViewerWrapper>
        <Nav>
          <h2>검색: {value ? `'${value}'` : "''"}</h2>
        </Nav>
        <SearchViewerBlock>
          {isEmpty && <EmptyTodos />}
          {isEmpty ||
            validTodos.map(todo => (
              <SearchViewerItem
                key={todo.id}
                todo={todo}
                showModals={showModals}
              />
            ))}
        </SearchViewerBlock>
      </SearchViewerWrapper>
    </>
  );
};

export default withRouter(SearchViewer);
