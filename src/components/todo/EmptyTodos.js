import React, { useState } from 'react';
import styled from 'styled-components';
import { centeredFlex } from '../../lib/style';
import Button from '../common/Button';
import TodoModal from '../modal/TodoModal';
import { GoPlus } from 'react-icons/go';

const EmptyTodosBlock = styled.div`
  ${centeredFlex}
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const EmptyTodos = ({ year, month, day }) => {
  const isPast = new Date(year, month - 1, day) < new Date();
  const [addModal, setAddModal] = useState(false);

  const showAddModal = () => setAddModal(true);
  const hideAddModal = () => setAddModal(false);

  return (
    <EmptyTodosBlock>
      {isPast && (
        <>
          <h1>아무 일 없었던</h1>
          <br />
          <h1>하루였어요. :)</h1>
        </>
      )}
      {isPast || (
        <>
          {addModal && <TodoModal type="add" closer={hideAddModal} />}
          <h1>새로운 일정을</h1>
          <br />
          <h1>추가해 보세요!</h1>
          <br />
          <Button rectangle onClick={showAddModal}>
            <GoPlus size="3rem" />
          </Button>
        </>
      )}
    </EmptyTodosBlock>
  );
};

export default EmptyTodos;
