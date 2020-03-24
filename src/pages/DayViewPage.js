import React from 'react';
import { useSelector } from 'react-redux';
import BaseViewPage from './BaseViewPage';
import DayViewer from '../components/todo/DayViewer';

const DayViewPage = ({ match }) => {
  const { year, month } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <BaseViewPage>
      <DayViewer
        year={parseInt(year, 10)}
        month={parseInt(month, 10)}
        todos={todos}
      />
    </BaseViewPage>
  );
};

export default DayViewPage;
