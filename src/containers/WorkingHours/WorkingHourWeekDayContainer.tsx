import React, { useCallback, useMemo } from 'react';

import styled from '@emotion/styled';
import { isEmpty, map } from 'lodash';
import Divider from 'src/components/Divider';
import PressableIcon from 'src/components/Icon/PressableIcon';
import Text from 'src/components/Text';
import { COLORS } from 'src/themes/colors';

import { WorkingHourWeekDayContainerWithProps, WorkingType } from './type';
import WorkingHoursTimeSelector from './WorkingHoursTimeSelector';

const S = {
  Container: styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `,
  TextDiv: styled.div`
    width: 150px;
  `,
};

const WorkingHourWeekDayContainer = ({
  weekDay,
  workingHours,
  setWorkingHours,
}: WorkingHourWeekDayContainerWithProps) => {
  const onPressInitialAddButton = useCallback(() => {
    setWorkingHours((prev) => {
      return map(prev, (value) => {
        const initialList = [
          { id: `${weekDay}-9-0-17-0`, start: [9, 0], end: [17, 0] },
        ] as WorkingType[];
        if (value.weekDay === weekDay) {
          return {
            ...value,
            workingHours: initialList,
          };
        }
        return value;
      });
    });
  }, [setWorkingHours, weekDay]);

  const renderTimeSelector = useMemo(
    () =>
      map(workingHours, (value) => {
        return (
          <WorkingHoursTimeSelector
            key={value.id}
            start={value.start}
            id={value.id}
            end={value.end}
            weekDay={weekDay}
            setWorkingHours={setWorkingHours}
          />
        );
      }),
    [setWorkingHours, weekDay, workingHours],
  );

  return (
    <S.Container>
      <Divider vertical={15} />
      <S.Wrapper>
        <S.TextDiv>
          <Text fontSize={16} fontWeight={400} color={COLORS.gray800}>
            {weekDay}
          </Text>
        </S.TextDiv>
        {isEmpty(workingHours) ? (
          <PressableIcon
            icon="Add"
            size={24}
            onClick={onPressInitialAddButton}
            paddingSize="base"
          />
        ) : (
          <S.Container>{renderTimeSelector}</S.Container>
        )}
      </S.Wrapper>
      <Divider vertical={15} />
    </S.Container>
  );
};

export default WorkingHourWeekDayContainer;
