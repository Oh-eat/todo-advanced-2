import React from 'react';
import styled from 'styled-components';
import { centeredFlex } from '../../lib/style';

const EmptyTodosBlock = styled.div`
  ${centeredFlex}
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const EmptyTodos = () => {
  return (
    <EmptyTodosBlock>
      <h1>검색어가 포함된</h1>
      <br />
      <h1>일정이 없어요. :(</h1>
    </EmptyTodosBlock>
  );
};

export default EmptyTodos;
