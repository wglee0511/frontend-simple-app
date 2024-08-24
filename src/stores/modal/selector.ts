import { RootState } from '..';

export const getIsVisibleAlertModal = (state: RootState) => state.modal.alertModal.isVisible;
