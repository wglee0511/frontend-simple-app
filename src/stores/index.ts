import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import modalSlice from './modal/slice';
import toastSlice from './toast/slice';

export const store = configureStore({
  reducer: { modal: modalSlice, toast: toastSlice },
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
