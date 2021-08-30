import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction(
  actionTypes.ADD_CONTACT,
  ({ name, number }) => {
    return {
      payload: {
        id: uuidv4(),
        name,
        number,
      },
    };
  },
);

const deleteContacts = createAction(actionTypes.DELETE_CONTACT);
const searchContacts = createAction(actionTypes.SEARCH_CONTACT);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, searchContacts };
