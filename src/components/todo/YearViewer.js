import React, { useState } from 'react';
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import getActiveYears from '../../lib/getActiveYears';
import getYearArray from '../../lib/getYearArray';
import {
  todoViewerWrapper,
  todoViewerGridBlock,
  values,
} from '../../lib/style';
import YearViewerItem from './YearViewerItem';
import Nav from '../common/Nav';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

const YearViewerWrapper = styled.div`
  ${todoViewerWrapper}
`;

const YearViewerBlock = styled.div`
  ${todoViewerGridBlock}
  height: calc(100% - ${values.nav.height});
  justify-content: space-between;
  align-content: space-between;
`;

const YearViewer = ({ todos }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const activeYears = getActiveYears(todos);

  const yearPrev = () =>
    setYear(state => (state - 9 > 1960 ? state - 9 : 1960));
  const yearNext = () =>
    setYear(state => (state + 9 < 2100 ? state + 9 : 2100));

  return (
    <YearViewerWrapper>
      <Nav>
        <Button rectangle size="2rem" onClick={yearPrev}>
          <MdNavigateBefore />
        </Button>
        <Spacer width="2rem" />
        <Button rectangle size="2rem" onClick={yearNext}>
          <MdNavigateNext />
        </Button>
      </Nav>
      <YearViewerBlock>
        {getYearArray(year).map(year => (
          <YearViewerItem key={year} year={year} empty={!activeYears[year]} />
        ))}
      </YearViewerBlock>
    </YearViewerWrapper>
  );
};

export default YearViewer;
