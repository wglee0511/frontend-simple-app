import { RootState } from '..';

export const getIsVisibleToast = (state: RootState) => state.toast.isVisible;
export const getToastMessage = (state: RootState) => state.toast.message;
