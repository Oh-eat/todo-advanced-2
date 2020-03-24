import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import BaseViewPage from './BaseViewPage';
import SearchViewer from '../components/search/SearchViewer';

const SearchPage = ({ location }) => {
  const { value } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const todos = useSelector(({ todos }) => todos);

  return (
    <BaseViewPage>
      <SearchViewer todos={todos} value={value} />
    </BaseViewPage>
  );
};

export default SearchPage;
