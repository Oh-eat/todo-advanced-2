import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { InputStyle } from '../../lib/style';
import { add, update } from '../../modules/todos';
import Modal from '../common/Modal';
import Button from '../common/Button';
import CalendarModal from './CalendarModal';
import dateToString from '../../lib/dateToString';
import { FiEdit } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 1rem;
  }
`;

const TitleInput = styled.input`
  ${InputStyle}
  width: auto;
`;

const DDayInput = styled.input`
  ${InputStyle}
  width: auto;
`;

const BodyInput = styled.textarea`
  ${InputStyle}
  width: auto;
  resize: none;
`;

const TodoModal = ({ type, closer, todo }) => {
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [body, setBody] = useState(todo ? todo.body : '');
  const [dDay, setDDay] = useState(todo ? todo.dDay : '');
  const [error, setError] = useState({ title: false, dDay: false });
  const [calendarModal, setCalendarModal] = useState(false);
  const dispatch = useDispatch();

  const titleChange = e => {
    const { value } = e.target;
    setTitle(title => value);
  };
  const bodyChange = e => {
    const { value } = e.target;
    setBody(body => value);
  };
  const submit = () => {
    const titleError = title.trim() === '';
    const dDayError = dDay === '';
    const error = titleError || dDayError;

    if (error) {
      setError({ title: titleError, dDay: dDayError });
      return;
    }

    if (type === 'add') {
      dispatch(add({ title, body, dDay }));
    } else {
      dispatch(update({ id: todo.id, title, body, dDay }));
    }
    closer();
  };
  const showCalendarModal = () => setCalendarModal(true);
  const hideCalendarModal = () => setCalendarModal(false);
  const submitCalendarModal = nextDDay => setDDay(dDay => nextDDay);

  return (
    <Modal closer={closer} title={type === 'add' ? '추가' : '수정'}>
      {calendarModal && (
        <CalendarModal
          submitModal={submitCalendarModal}
          closer={hideCalendarModal}
          dDay={dDay === '' ? null : dDay}
        />
      )}
      <Wrapper>
        <TitleInput
          value={title}
          onChange={titleChange}
          error={error.title}
          placeholder="제목"
        />
        <DDayInput
          value={dateToString(dDay)}
          error={error.dDay}
          readOnly
          placeholder="날짜"
          onClick={showCalendarModal}
        />
        <BodyInput
          value={body}
          onChange={bodyChange}
          rows={8}
          placeholder="내용"
        />
        <Button width="100%" height="3rem" onClick={submit}>
          {type === 'add' ? <GoPlus size="1.5rem" /> : <FiEdit size="1.5rem" />}
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default TodoModal;
