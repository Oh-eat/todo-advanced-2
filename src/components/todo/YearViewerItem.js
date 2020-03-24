import React from 'react';
import styled from 'styled-components';
import { todoViewerItemNarrowBlock, hoverColor } from '../../lib/style';
import { withRouter } from 'react-router-dom';

const YearViewerItemBlock = styled.div`
  ${todoViewerItemNarrowBlock}
  ${hoverColor}
  width: calc(100% / 3.1);
  height: calc(100% / 3.2);
`;

const YearViewerItem = ({ history, year, empty }) => {
  const changeViewMonth = e => {
    e.preventDefault();
    history.push(`/todos/${year}`);
  };

  return (
    <YearViewerItemBlock empty={empty} onClick={changeViewMonth}>
      <div className="year">
        <h2>{year}</h2>
      </div>
    </YearViewerItemBlock>
  );
};

export default withRouter(YearViewerItem);
