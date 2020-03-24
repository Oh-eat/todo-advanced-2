import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  todoViewerWrapper,
  todoViewerGridBlock,
  values,
} from '../../lib/style';
import getActiveMonths from '../../lib/getActiveMonths';
import Nav from '../common/Nav';
import MonthViewerItem from './MonthViewerItem';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

const MonthViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const MonthViewerBlock = styled.div`
  ${todoViewerGridBlock}
  height: calc(100% - ${values.nav.height});
  justify-content: space-between;
  align-content: space-between;
`;

const MonthViewer = ({ history, year, todos }) => {
  const activeMonths = getActiveMonths(todos, year);

  const changeView = () => history.push('/todos/');

  return (
    <MonthViewerWrapper>
      <Nav>
        <Button onClick={changeView}>
          <Spacer width="0.25rem" />
          <h3>{year}년</h3>
          <Spacer width="0.25rem" />
        </Button>
      </Nav>
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

export default withRouter(MonthViewer);
