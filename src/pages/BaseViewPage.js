import React from 'react';
import BodyWrapper from '../components/common/BodyWrapper';
import TodoToolbar from '../components/todo/TodoToolbar';

const BaseViewPage = ({ children }) => {
  return (
    <BodyWrapper>
      <TodoToolbar />
      {children}
    </BodyWrapper>
  );
};

export default BaseViewPage;
