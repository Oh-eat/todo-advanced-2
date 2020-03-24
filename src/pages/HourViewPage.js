import React from 'react';
import { useSelector } from 'react-redux';
import BaseViewPage from './BaseViewPage';
import HourViewer from '../components/todo/HourViewer';

const HourViewPage = ({ match }) => {
  const { year, month, day } = match.params;
  const todos = useSelector(({ todos }) => todos);

  return (
    <BaseViewPage>
      <HourViewer
        year={parseInt(year, 10)}
        month={parseInt(month, 10)}
        day={parseInt(day, 10)}
        todos={todos}
      />
    </BaseViewPage>
  );
};

export default HourViewPage;
