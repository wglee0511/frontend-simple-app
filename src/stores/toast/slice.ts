import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isVisible: boolean;
  message: string;
}

const initialState: InitialState = { isVisible: false, message: '' };

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, { payload }: PayloadAction<string>) => {
      state.isVisible = true;
      state.message = payload;
    },

    resetToast: () => initialState,
  },
});

export const { setToast, resetToast } = toastSlice.actions;

export default toastSlice.reducer;
