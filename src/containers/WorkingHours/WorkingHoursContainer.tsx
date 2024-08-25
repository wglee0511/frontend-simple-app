import React, { useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { forEach, map } from 'lodash';
import Divider from 'src/components/Divider';
import Text from 'src/components/Text';
import { useAppDispatch, useAppSelector } from 'src/stores/hooks';
import { getWorkingHours } from 'src/stores/workingHours/selector';
import { setStoreWorkingHours } from 'src/stores/workingHours/slice';
import { COLORS } from 'src/themes/colors';

import { WeeklyWorkingType } from './type';
import WorkingHourWeekDayContainer from './WorkingHourWeekDayContainer';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Wrapper: styled.div`
    max-width: 600px;
    width: 100%;
  `,
  Button: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  `,
};

const WorkingHoursContainer = () => {
  const [workingHours, setWorkingHours] = useState<WeeklyWorkingType[]>([]);

  const dispatch = useAppDispatch();
  const storeWorkingHours = useAppSelector(getWorkingHours);
  const isModifyWorkingHours = useMemo(() => {
    let localId = '';
    let storeId = '';
    forEach(workingHours, (weekValue) => {
      forEach(weekValue.workingHours, (hourValue) => {
        localId += hourValue.id;
      });
    });

    forEach(storeWorkingHours, (weekValue) => {
      forEach(weekValue.workingHours, (hourValue) => {
        storeId += hourValue.id;
      });
    });

    return localId !== storeId;
  }, [storeWorkingHours, workingHours]);

  const renderWeekDays = useMemo(() => {
    return map(workingHours, (value) => {
      return (
        <WorkingHourWeekDayContainer
          key={value.weekDay}
          weekDay={value.weekDay}
          workingHours={value.workingHours}
          setWorkingHours={setWorkingHours}
        />
      );
    });
  }, [workingHours]);

  useEffect(() => {
    setWorkingHours(() => [...storeWorkingHours]);
  }, [storeWorkingHours]);

  return (
    <S.Container>
      <S.Wrapper>
        <Divider vertical={50} />
        <Text fontSize={20} fontWeight={700} color={COLORS.gray800}>
          Set your weekly hours
        </Text>
        <Divider vertical={20} />
        <Divider vertical={1} horizontal="100%" backgroundColor={COLORS.gray250} />
        {renderWeekDays}
        <Divider vertical={20} />
        {isModifyWorkingHours && (
          <div style={{ flex: 1, display: 'flex' }}>
            <S.Button
              style={{ backgroundColor: COLORS.gray250 }}
              onClick={() => setWorkingHours(() => [...storeWorkingHours])}
            >
              <Text fontSize={16} fontWeight={700} color={COLORS.gray800}>
                Cancel
              </Text>
            </S.Button>
            <Divider horizontal={20} />
            <S.Button
              style={{ backgroundColor: COLORS.primary700 }}
              onClick={() => dispatch(setStoreWorkingHours(workingHours))}
            >
              <Text fontSize={16} fontWeight={700} color={COLORS.white}>
                Update
              </Text>
            </S.Button>
          </div>
        )}
        <Divider vertical={100} />
      </S.Wrapper>
    </S.Container>
  );
};

export default WorkingHoursContainer;
