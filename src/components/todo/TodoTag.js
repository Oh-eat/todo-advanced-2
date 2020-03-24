import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
  cursor: pointer;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

const TodoTag = ({ todo }) => {
  const dispatch = useDispatch();
  const todoClick = () => {};

  return <TodoItemBlock onClick={todoClick}>{`#${todo.title}`}</TodoItemBlock>;
};

export default TodoTag;
