import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';
import YearViewer from '../components/todo/YearViewer';

const YearViewPage = () => {
  const todos = useSelector(({ todos }) => todos);
  return (
    <Wrapper>
      <TodoToolbar />
      <YearViewer todos={todos} />
    </Wrapper>
  );
};

export default YearViewPage;
