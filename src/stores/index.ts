import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalSlice from './modal/slice';
import toastSlice from './toast/slice';
import workingHoursSlice from './workingHours/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['workingHour'],
};
const rootReducer = combineReducers({
  modal: modalSlice,
  toast: toastSlice,
  workingHour: workingHoursSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
