import React from 'react';
import { useSelector } from 'react-redux';
import BaseViewPage from './BaseViewPage';
import MonthViewer from '../components/todo/MonthViewer';

const MonthViewPage = ({ match }) => {
  const { year } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <BaseViewPage>
      <MonthViewer year={parseInt(year, 10)} todos={todos} />
    </BaseViewPage>
  );
};

export default MonthViewPage;
