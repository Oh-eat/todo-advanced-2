import { createAction, handleActions } from 'redux-actions';
import getLastId from '../lib/getLastId';
import todosGenerator from '../lib/todosGenerator';

const ADD = 'todos/ADD';
const UPDATE = 'todos/UPDATE';
const REMOVE = 'todos/REMOVE';

export const add = createAction(ADD, ({ title, body, dDay }) => ({
  title,
  body,
  dDay,
}));
export const update = createAction(UPDATE, ({ id, ...nextData }) => ({
  id,
  ...nextData,
}));
export const remove = createAction(REMOVE, id => id);

const initialState = todosGenerator(100);

const todos = handleActions(
  {
    [ADD]: (state, { payload: { title, body, dDay } }) => [
      ...state,
      {
        id: getLastId(state),
        title,
        body,
        dDay,
        createdAt: new Date(),
        deleted: false,
      },
    ],
    [UPDATE]: (state, { payload: { id, ...nextData } }) =>
      state.map(todo => (todo.id === id ? { ...todo, ...nextData } : todo)),
    [REMOVE]: (state, { payload: id }) => state.filter(todo => todo.id !== id),
  },
  initialState,
);

export default todos;
