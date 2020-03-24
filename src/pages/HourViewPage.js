import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';
import HourViewer from '../components/todo/HourViewer';

const HourViewPage = ({ match }) => {
  const { year, month, day } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <Wrapper>
      <TodoToolbar />
      <HourViewer
        year={parseInt(year, 10)}
        month={parseInt(month, 10)}
        day={parseInt(day, 10)}
        todos={todos}
      />
    </Wrapper>
  );
};

export default HourViewPage;
