import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contactReducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    reducer: contactReducer,
    middleware,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export default { store, persistor };
