import { WeekDays } from 'src/lib/constant';

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
