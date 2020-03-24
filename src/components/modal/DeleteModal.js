import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { remove } from '../../modules/todos';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { FiTrash2 } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    margin-top: 1rem;
  }
`;

const DeleteModal = ({ closer, todo }) => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(remove(todo.id));
    closer();
  };

  return (
    <Modal closer={closer} title={'삭제'}>
      <Wrapper>
        <div>정말로 삭제하시겠습니까?</div>
        <h3>#{todo.title}</h3>
        <Button width="100%" height="3rem" onClick={submit}>
          <FiTrash2 size="1.5rem" />
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default DeleteModal;
