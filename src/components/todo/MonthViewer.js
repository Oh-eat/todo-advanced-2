import React from 'react';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerGridBlock,
  values,
} from '../../lib/style';
import getActiveMonths from '../../lib/getActiveMonths';
import TodoNav from './TodoNav';
import MonthViewerItem from './MonthViewerItem';

const MonthViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const MonthViewerBlock = styled.div`
  ${todoViewerGridBlock}
  height: calc(100% - ${values.nav.height});
  justify-content: space-between;
  align-content: space-between;
`;

const MonthViewer = ({ year, todos }) => {
  const activeMonths = getActiveMonths(todos, year);

  return (
    <MonthViewerWrapper>
      <TodoNav year={year} />
      <MonthViewerBlock>
        {[...Array(12).keys()]
          .map(i => i + 1)
          .map(month => (
            <MonthViewerItem
              key={month}
              year={year}
              month={month}
              empty={!activeMonths[month]}
            />
          ))}
      </MonthViewerBlock>
    </MonthViewerWrapper>
  );
};

export default MonthViewer;
