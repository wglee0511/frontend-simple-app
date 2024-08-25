import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { filter, find, map } from 'lodash';
import Divider from 'src/components/Divider';
import PressableIcon from 'src/components/Icon/PressableIcon';
import Menu from 'src/components/Menu';
import { Item } from 'src/components/Menu/type';
import Text from 'src/components/Text';
import { getMenuByTime, getMenuListId, getMenuListItems, getMenuListValue } from 'src/lib/list';
import { COLORS } from 'src/themes/colors';

import { WorkingHourTimeSelectorWithProps, WorkingType } from './type';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
  `,
};

const WorkingHoursTimeSelector = ({
  setWorkingHours,
  start,
  end,
  weekDay,
  id,
}: WorkingHourTimeSelectorWithProps) => {
  const [menuList, settMenuList] = useState<Item[]>([]);

  const setStartItem = useCallback(
    (item: Item) => {
      const time = getMenuByTime((item.value as string) || '00:00');

      setWorkingHours((prev) => {
        return map(prev, (weekValue) => {
          if (weekValue.weekDay === weekDay) {
            return {
              ...weekValue,
              workingHours: map(weekValue.workingHours, (hourValue) => {
                if (hourValue.id === id) {
                  const isSameTime = time[0] === hourValue.end[0];
                  const isEndDelay = isSameTime
                    ? time[1] > hourValue.end[1]
                    : time[0] > hourValue.end[0];
                  const targetHourValue = {
                    id: getMenuListId(weekDay, time, hourValue.end),
                    start: time,
                    end: hourValue.end,
                  } as WorkingType;

                  if (isEndDelay) {
                    const endValue: [number, number] = [time[0] === 23 ? 0 : time[0] + 1, time[1]];
                    targetHourValue.id = getMenuListId(weekDay, time, endValue);
                    targetHourValue.end = endValue;
                  }

                  return targetHourValue;
                }
                return hourValue;
              }),
            };
          }
          return weekValue;
        });
      });
    },
    [id, setWorkingHours, weekDay],
  );

  const setEndItem = useCallback(
    (item: Item) => {
      const time = getMenuByTime((item.value as string) || '00:00');

      setWorkingHours((prev) => {
        return map(prev, (weekValue) => {
          if (weekValue.weekDay === weekDay) {
            return {
              ...weekValue,
              workingHours: map(weekValue.workingHours, (hourValue) => {
                if (hourValue.id === id) {
                  const isSameTime = hourValue.start[0] === time[0];
                  const isStartDelay = isSameTime
                    ? hourValue.start[1] > time[1]
                    : hourValue.start[0] > time[0];
                  const targetHourValue = {
                    id: getMenuListId(weekDay, hourValue.start, time),
                    start: hourValue.start,
                    end: time,
                  } as WorkingType;

                  if (isStartDelay) {
                    const startValue: [number, number] = [
                      time[0] === 23 ? 0 : time[0] - 1,
                      time[1],
                    ];
                    targetHourValue.id = getMenuListId(weekDay, time, time);
                    targetHourValue.start = startValue;
                  }

                  return targetHourValue;
                }
                return hourValue;
              }),
            };
          }
          return weekValue;
        });
      });
    },
    [id, setWorkingHours, weekDay],
  );

  const onClickDelete = useCallback(() => {
    setWorkingHours((prev) =>
      map(prev, (weekValue) => {
        if (weekValue.weekDay === weekDay) {
          const workingHoursValue = filter(
            weekValue.workingHours,
            (hourValue) => hourValue.id !== id,
          );
          return {
            ...weekValue,
            workingHours: workingHoursValue,
          };
        }
        return weekValue;
      }),
    );
  }, [id, setWorkingHours, weekDay]);

  const onClickAdd = useCallback(() => {
    setWorkingHours((prev) =>
      map(prev, (weekValue) => {
        if (weekValue.weekDay === weekDay) {
          const targetWorkingHours = weekValue.workingHours;
          const lastTargetWorkingHour = targetWorkingHours[targetWorkingHours.length - 1];
          const startValue = lastTargetWorkingHour.end;
          const isStartValue45Min = startValue[1] === 45;
          const endValue: [number, number] = [
            isStartValue45Min ? startValue[0] + 1 : startValue[0],
            isStartValue45Min ? 0 : startValue[1] + 15,
          ];
          return {
            ...weekValue,
            workingHours: [
              ...targetWorkingHours,
              {
                id: getMenuListId(weekValue.weekDay, startValue, endValue),
                end: endValue,
                start: startValue,
              },
            ],
          };
        }
        return weekValue;
      }),
    );
  }, [setWorkingHours, weekDay]);

  const selectedStartMenu = useMemo(
    () => find(menuList, (value) => value.value === getMenuListValue(start)) || { value: '00:00' },
    [menuList, start],
  );

  const selectedEndMenu = useMemo(
    () => find(menuList, (value) => value.value === getMenuListValue(end)) || { value: '00:00' },
    [menuList, end],
  );

  useEffect(() => {
    settMenuList(() => {
      const list = getMenuListItems();
      return list;
    });
  }, [start]);

  return (
    <S.Container>
      <Menu
        setItem={
          setStartItem as Dispatch<SetStateAction<Item | null>> | ((item: Item | null) => void)
        }
        item={selectedStartMenu}
        menuList={menuList}
        menuListSize="small"
        placeholder="0"
        maxHeight={300}
      />
      <Divider horizontal={10} />
      <Text fontSize={20} fontWeight={700} color={COLORS.gray800}>
        -
      </Text>
      <Divider horizontal={10} />
      <Menu
        setItem={
          setEndItem as Dispatch<SetStateAction<Item | null>> | ((item: Item | null) => void)
        }
        item={selectedEndMenu}
        menuList={menuList}
        menuListSize="small"
        placeholder="0"
        maxHeight={300}
      />
      <Divider horizontal={10} />
      <PressableIcon
        icon="DeleteFill"
        size={24}
        color={COLORS.gray400}
        paddingSize="base"
        onClick={onClickDelete}
      />
      <Divider horizontal={10} />
      <PressableIcon
        icon="Add"
        size={24}
        color={COLORS.gray400}
        paddingSize="base"
        onClick={onClickAdd}
      />
    </S.Container>
  );
};

export default React.memo(WorkingHoursTimeSelector);
