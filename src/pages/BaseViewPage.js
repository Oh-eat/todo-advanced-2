import React from 'react';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';

const BaseViewPage = ({ children }) => {
  return (
    <Wrapper>
      <TodoToolbar />
      {children}
    </Wrapper>
  );
};

export default BaseViewPage;
