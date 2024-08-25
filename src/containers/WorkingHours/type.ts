import { WeekDays } from 'src/lib/constant';
import { SetState } from 'src/types/react';

export type WeekDayType = (typeof WeekDays)[number];
export interface WorkingType {
  start: [number, number];
  end: [number, number];
  id: string;
}
export interface WeeklyWorkingType {
  weekDay: WeekDayType;
  workingHours: WorkingType[];
}

export interface WorkingHourWeekDayContainerWithProps extends WeeklyWorkingType {
  setWorkingHours: SetState<WeeklyWorkingType[]>;
}

export interface WorkingHourTimeSelectorWithProps
  extends WorkingType,
    Omit<WorkingHourWeekDayContainerWithProps, 'workingHours'> {}
