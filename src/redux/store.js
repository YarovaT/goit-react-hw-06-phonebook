import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from '../redux/contactsItems/contacts-reducer';

const reducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
