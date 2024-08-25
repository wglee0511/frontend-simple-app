import { forEach, split } from 'lodash';
import { Item } from 'src/components/Menu/type';
import { WeekDayType } from 'src/containers/WorkingHours/type';

import { MINUTE_VALUES } from './constant';
import { getNumberTimeTextValue } from './text';

export const getMenuListValue = (value: [number, number]) =>
  `${getNumberTimeTextValue(value[0])}:${getNumberTimeTextValue(value[1])}`;

export const getMenuListItems = () => {
  const list: Item[] = [];

  forEach(Array(24), (_, index) => {
    forEach(MINUTE_VALUES, (minuteValue) => {
      list.push({
        id: getMenuListValue([index, minuteValue]),
        value: getMenuListValue([index, minuteValue]),
      });
    });
  });

  return list;
};

export const getMenuListId = (
  weekDays: WeekDayType,
  start: [number, number],
  end: [number, number],
) => `${weekDays}-${start[0]}-${start[1]}-${end[0]}-${end[1]}`;

export const getMenuByTime = (time: string) => {
  const splitValue = split(time, ':');
  return [
    Number.isNaN(Number(splitValue[0])) ? 0 : Number(splitValue[0]),
    Number.isNaN(Number(splitValue[1])) ? 0 : Number(splitValue[1]),
  ] as [number, number];
};
