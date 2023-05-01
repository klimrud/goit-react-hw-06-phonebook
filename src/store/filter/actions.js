import { createAction} from '@reduxjs/toolkit';
// import { CHANGEFILTER } from "./types";

export const filterChange = createAction('CHANGEFILTER', name => {
  return {
    payload: name,
  };
});

// export const filterChange = filter => ({
//   type: CHANGEFILTER,
//   payload: filter,

// });
