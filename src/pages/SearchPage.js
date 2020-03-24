import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import TodoToolbar from '../components/todo/TodoToolbar';
import qs from 'qs';
import SearchViewer from '../components/search/SearchViewer';

const SearchPage = ({ location }) => {
  const { value } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const todos = useSelector(({ todos }) => todos);

  return (
    <Wrapper>
      <TodoToolbar />
      <SearchViewer todos={todos} value={value} />
    </Wrapper>
  );
};

export default SearchPage;
