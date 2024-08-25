import React from 'react';

import styled from '@emotion/styled';
import Divider from 'src/components/Divider';
import Text from 'src/components/Text';
import { COLORS } from 'src/themes/colors';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Wrapper: styled.div`
    max-width: 800px;
    width: 100%;
  `,
};

const WorkingHoursContainer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Divider vertical={50} />
        <Text fontSize={20} fontWeight={700} color={COLORS.gray800}>
          Set your weekly hours
        </Text>
        <Divider vertical={20} />
        <Divider vertical={1} horizontal="100%" backgroundColor={COLORS.gray250} />
      </S.Wrapper>
    </S.Container>
  );
};

export default WorkingHoursContainer;
