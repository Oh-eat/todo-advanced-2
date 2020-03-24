import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerGridBlock,
  values,
} from '../../lib/style';
import getActiveDays from '../../lib/getActiveDays';
import Nav from '../common/Nav';
import DayViewerItem from './DayViewerItem';
import Button from '../common/Button';
import Spacer from '../common/Spacer';
import getLastDay from '../../lib/getLastDay';

const DayViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const DayViewerBlock = styled.div`
  ${todoViewerGridBlock}
  justify-content: space-between;
  align-content: space-between;
  height: calc(100% - ${values.nav.height});
`;

const MonthViewer = ({ history, year, month, todos }) => {
  const activeDays = getActiveDays(todos, year, month);

  const changeViewYear = () => history.push('/todos/');
  const changeViewMonth = () => history.push(`/todos/${year}`);

  return (
    <DayViewerWrapper>
      <Nav>
        <Button onClick={changeViewYear}>
          <Spacer width="0.25rem" />
          <h3>{year}년</h3>
          <Spacer width="0.25rem" />
        </Button>
        <Spacer width="1rem" />
        <Button onClick={changeViewMonth}>
          <Spacer width="0.25rem" />
          <h3>{month}월</h3>
          <Spacer width="0.25rem" />
        </Button>
      </Nav>
      <DayViewerBlock>
        {[...Array(35).keys()]
          .map(i => i + 1)
          .map(day => (
            <DayViewerItem
              key={day}
              year={year}
              month={month}
              day={day}
              empty={!activeDays[day]}
              hidden={day > getLastDay(year, month)}
            />
          ))}
      </DayViewerBlock>
    </DayViewerWrapper>
  );
};

export default withRouter(MonthViewer);
