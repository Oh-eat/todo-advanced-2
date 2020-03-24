import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';
import DayViewer from '../components/todo/DayViewer';

const DayViewPage = ({ match }) => {
  const { year, month } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <Wrapper>
      <TodoToolbar />
      <DayViewer
        year={parseInt(year, 10)}
        month={parseInt(month, 10)}
        todos={todos}
      />
    </Wrapper>
  );
};

export default DayViewPage;
