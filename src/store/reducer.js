import { combineReducers } from 'redux';
import { filterReducer } from './filter/reducer';
 import { contactsReducer } from './contacts/slice';
//  import { contactReducer } from './contacts/reducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
   filter: filterReducer,
});
