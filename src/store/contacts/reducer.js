import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { contactCreate, contactRemove } from './actions';

export const contactReducer = createReducer(initialState.contacts, {
  [contactCreate]: (state, action) => {

 state.contacts.push(action.payload)

    // return {
    //   ...state,
    //   contacts: [...state.contacts, action.payload],
    // };
  },
  [contactRemove]: (state, action) => {
    return {
       ...state,
      contacts: action.payload,
    };
  },
});

// export const contactReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case 'CREATECONTACTS':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'REMOVECONTACTS':
//       return {
//         ...state,
//         contacts: action.payload,
//       };

//     default:
//       return state;
//   }
// };
