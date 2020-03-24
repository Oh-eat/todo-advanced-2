import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';
import MonthViewer from '../components/todo/MonthViewer';

const MonthViewPage = ({ match }) => {
  const { year } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <Wrapper>
      <TodoToolbar />
      <MonthViewer year={parseInt(year, 10)} todos={todos} />
    </Wrapper>
  );
};

export default MonthViewPage;
