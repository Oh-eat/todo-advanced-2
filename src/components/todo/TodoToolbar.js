import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { MdSearch } from 'react-icons/md';
import Toolbar from '../common/Toolbar';
import Button from '../common/Button';
import TodoModal from '../modal/TodoModal';
import SearchModal from '../modal/SearchModal';

const TodoToolbar = () => {
  const [modals, setModals] = useState({ add: false, search: false });

  const showModals = modal => setModals(state => ({ ...state, [modal]: true }));
  const hideModals = modal =>
    setModals(state => ({ ...state, [modal]: false }));

  return (
    <>
      {modals.add && <TodoModal type="add" closer={() => hideModals('add')} />}
      {modals.search && (
        <SearchModal type="add" closer={() => hideModals('search')} />
      )}
      <Toolbar>
        <div className="left"></div>
        <div className="right">
          <Button rectangle size="1.75rem" onClick={() => showModals('add')}>
            <GoPlus size="1.5rem" />
          </Button>
          <Button rectangle size="1.75rem" onClick={() => showModals('search')}>
            <MdSearch size="1.5rem" />
          </Button>
        </div>
      </Toolbar>
    </>
  );
};

export default TodoToolbar;
