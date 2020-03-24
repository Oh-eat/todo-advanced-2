import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { InputStyle } from '../../lib/style';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 1rem;
  }
`;

const SearchInput = styled.input`
  ${InputStyle}
`;

const SearchModal = ({ history, closer }) => {
  const [value, setValue] = useState('');

  const inputChange = e => {
    const { value } = e.target;
    setValue(() => value);
  };
  const submit = () => {
    history.push(`/search?value=${value}`);
  };

  return (
    <Modal closer={closer} title={'검색'}>
      <Wrapper>
        <SearchInput
          value={value}
          placeholder="검색어"
          onChange={inputChange}
          maxLength={20}
        />
        <Button width="100%" height="3rem" onClick={submit}>
          <MdSearch size="1.5rem" />
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default withRouter(SearchModal);
