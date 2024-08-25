import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeeklyWorkingType } from 'src/containers/WorkingHours/type';
import { INITIAL_WEEK_WORKING_HOURS } from 'src/lib/constant';

interface InitialState {
  workingHours: WeeklyWorkingType[];
}

const initialState: InitialState = { workingHours: INITIAL_WEEK_WORKING_HOURS };

const workingHoursSlice = createSlice({
  name: 'workingHours',
  initialState,
  reducers: {
    setStoreWorkingHours: (state, { payload }: PayloadAction<WeeklyWorkingType[]>) => {
      state.workingHours = payload;
    },
  },
});

export const { setStoreWorkingHours } = workingHoursSlice.actions;

export default workingHoursSlice.reducer;
