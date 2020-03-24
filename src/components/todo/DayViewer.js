import React from 'react';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerGridBlock,
  values,
} from '../../lib/style';
import getActiveDays from '../../lib/getActiveDays';
import DayViewerItem from './DayViewerItem';
import getLastDay from '../../lib/getLastDay';
import TodoNav from './TodoNav';
import range from '../../lib/range';

const DayViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const DayViewerBlock = styled.div`
  ${todoViewerGridBlock}
  justify-content: space-between;
  align-content: space-between;
  height: calc(100% - ${values.nav.height});
`;

const MonthViewer = ({ year, month, todos }) => {
  const activeDays = getActiveDays(todos, year, month);

  return (
    <DayViewerWrapper>
      <TodoNav year={year} month={month} />
      <DayViewerBlock>
        {range(35, 1).map(day => (
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

export default MonthViewer;
