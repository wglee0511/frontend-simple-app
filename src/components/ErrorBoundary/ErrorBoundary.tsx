/* eslint-disable no-console */
import React, { ReactNode } from 'react';

import styled from '@emotion/styled';
import { COLORS } from 'src/themes/colors';
import { defaultCenterFlex } from 'src/themes/globalStyles';

import Divider from '../Divider';
import Text from '../Text';

const S = {
  Container: styled.div`
    ${defaultCenterFlex}
  `,
};

interface Props extends React.PropsWithChildren {
  fallback?: ReactNode;
  boundary?: string;
}

interface State {
  hasError: boolean;
  boundary?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      boundary: props.boundary,
    };
  }

  public static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { boundary } = this.state;
    console.log(`${boundary} boundary error:`, error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      if (fallback) {
        return fallback;
      }
      return (
        <S.Container>
          <Divider vertical={200} />
          <Text color={COLORS.gray200} fontSize={20} fontWeight={700}>
            잠시후 다시 시도해주세요.
          </Text>
        </S.Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
