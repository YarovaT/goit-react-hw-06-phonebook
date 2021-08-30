import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.ADD_CONTACT]: (state, { payload }) => [...state, payload],
  [actions.DELETE_CONTACT]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.SEARCH_CONTACT]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
