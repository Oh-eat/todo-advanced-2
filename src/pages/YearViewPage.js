import React from 'react';
import { useSelector } from 'react-redux';
import BaseViewPage from './BaseViewPage';
import YearViewer from '../components/todo/YearViewer';

const YearViewPage = () => {
  const todos = useSelector(({ todos }) => todos);
  return (
    <BaseViewPage>
      <YearViewer todos={todos} />
    </BaseViewPage>
  );
};

export default YearViewPage;
