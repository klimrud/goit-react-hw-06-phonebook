// import { type } from "@testing-library/user-event/dist/type";
// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from './reducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const store = createStore(reducer);

// console.log('store', store.getState());
// store.dispatch({type:'changeFilter', payload:{filter: 'newName'}})

// console.log('store', store.getState());

// store.dispatch({type:'createContact', payload:{name: 'newName', number: 'newNumber'} })
// console.log('store', store.getState());
