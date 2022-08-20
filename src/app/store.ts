import { configureStore } from '@reduxjs/toolkit';
import { AccountReducer } from 'reducer';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

const reducers = combineReducers({
  account: AccountReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export const useAppDispatch = () => useDispatch<IAppDispatch>();
