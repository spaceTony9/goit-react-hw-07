import { createSlice } from '@reduxjs/toolkit';
import { CONSTANTS } from './constants.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: CONSTANTS.CONTACTS_INIT },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
  },
});
const persistContactsConfig = {
  key: 'root',
  whitelist: ['items'],
  storage,
};

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);
