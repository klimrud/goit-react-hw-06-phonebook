import { initialStateContacts } from './initial';

const { createSlice} = require('@reduxjs/toolkit');
// const { initialState } = require('store/initialState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    contactCreate(state, action) {
      //  state.contacts.push(action.payload)

      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    contactRemove(state, action) {
      return {
        ...state,
        contacts: action.payload,
      };
    },
  },
});

export const { contactCreate, contactRemove } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
