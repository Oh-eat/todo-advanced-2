import React from 'react';
import styled from 'styled-components';
import { todoViewerItemNarrowBlock, hoverColor } from '../../lib/style';
import { withRouter } from 'react-router-dom';

const DayViewerItemBlock = styled.div`
  ${todoViewerItemNarrowBlock}
  ${hoverColor}
  width: calc(100% / 7.4);
  height: calc(100% / 5.2);
`;

const DayViewerItem = ({ history, year, month, day, empty, hidden }) => {
  const changeViewDay = e => {
    e.preventDefault();
    history.push(`/todos/${year}/${month}/${day}`);
  };

  return (
    <DayViewerItemBlock empty={empty} hidden={hidden} onClick={changeViewDay}>
      <h2>{day}</h2>
    </DayViewerItemBlock>
  );
};

export default withRouter(DayViewerItem);
