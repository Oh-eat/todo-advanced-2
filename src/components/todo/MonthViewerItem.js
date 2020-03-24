import React from 'react';
import styled from 'styled-components';
import { todoViewerItemNarrowBlock, hoverColor } from '../../lib/style';
import { withRouter } from 'react-router-dom';

const MonthViewerItemBlock = styled.div`
  ${todoViewerItemNarrowBlock}
  ${hoverColor}
  width: calc(100% / 3.1);
  height: calc(100% / 4.2);
`;

const MonthViewerItem = ({ history, year, month, empty }) => {
  const changeViewDay = e => {
    e.preventDefault();
    history.push(`/todos/${year}/${month}`);
  };

  return (
    <MonthViewerItemBlock empty={empty} onClick={changeViewDay}>
      <h2>{month}</h2>
    </MonthViewerItemBlock>
  );
};

export default withRouter(MonthViewerItem);
