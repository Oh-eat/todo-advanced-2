import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Nav from '../common/Nav';
import Button from '../common/Button';
import Spacer from '../common/Spacer';
import { withRouter } from 'react-router-dom';

const TodoNav = ({ history, yearPrev, yearNext, year, month, day }) => {
  const changeViewYear = () => history.push('/todos/');
  const changeViewMonth = () => history.push(`/todos/${year}`);
  const changeViewDay = () => history.push(`/todos/${year}/${month}`);

  return (
    <Nav>
      {yearPrev && yearNext && (
        <>
          <Button rectangle size="2rem" onClick={yearPrev}>
            <MdNavigateBefore />
          </Button>
          <Spacer width="2rem" />
          <Button rectangle size="2rem" onClick={yearNext}>
            <MdNavigateNext />
          </Button>
        </>
      )}
      {year && (
        <Button onClick={changeViewYear}>
          <Spacer width="0.25rem" />
          <h3>{year}년</h3>
          <Spacer width="0.25rem" />
        </Button>
      )}
      {month && (
        <>
          <Spacer width="1rem" />
          <Button onClick={changeViewMonth}>
            <Spacer width="0.25rem" />
            <h3>{month}월</h3>
            <Spacer width="0.25rem" />
          </Button>
        </>
      )}
      {day && (
        <>
          <Spacer width="1rem" />
          <Button onClick={changeViewDay}>
            <Spacer width="0.25rem" />
            <h3>{day}일</h3>
            <Spacer width="0.25rem" />
          </Button>
        </>
      )}
    </Nav>
  );
};

export default withRouter(TodoNav);
