import { map } from 'lodash';
import { WeeklyWorkingType } from 'src/containers/WorkingHours/type';

const { REACT_APP_API_KEY, REACT_APP_MAIN_URL } = process.env;

export const IMAGE_API_KEY = REACT_APP_API_KEY;
export const MAIN_URL = REACT_APP_MAIN_URL;

export const WeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export const INITIAL_WEEK_WORKING_HOURS: WeeklyWorkingType[] = map(WeekDays, (value) => {
  return { weekDay: value, workingHours: [] };
});

export const MINUTE_VALUES = [0, 15, 30, 45];
export const FLEX_GAP = 16;
