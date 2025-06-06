import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import jobSlice from './jobSlice'
import companySlice from './CompanySlice'
import applicantsSlice from './applicantsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  auth : authSlice,
  job : jobSlice,
  company : companySlice,
  applicants : applicantsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;