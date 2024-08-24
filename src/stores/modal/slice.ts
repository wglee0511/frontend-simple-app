import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  alertModal: {
    isVisible: boolean;
  };
}

const initialState: InitialState = { alertModal: { isVisible: false } };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setAlertModal: (state, { payload }: PayloadAction<boolean>) => {
      state.alertModal.isVisible = payload;
    },

    resetModal: () => initialState,
  },
});

export const { setAlertModal, resetModal } = modalSlice.actions;

export default modalSlice.reducer;
