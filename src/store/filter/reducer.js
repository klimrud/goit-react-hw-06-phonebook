import { createReducer } from '@reduxjs/toolkit';
// import { initialState } from '../initialState';
// import { CHANGEFILTER } from './types';
import { filterChange } from './actions';
import { initialStateFilter } from './initial';

export const filterReducer = createReducer(initialStateFilter, {
  [filterChange]: (state,action) => {
    return {
             
              filter: action.payload,
            };
          }

          
});



// export const filterReducer = (state = initialState.filter, action) => {
//   switch (action.type) {
//     case CHANGEFILTER:
//       return {
//         // ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };
