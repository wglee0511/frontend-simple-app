import React, { useEffect, useRef, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import { COLORS } from 'src/themes/colors';

import Text from '../Text';

import { TOAST_DURATION, ToastProps, ToastStyleProps } from './type';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const S = {
  Container: styled.div<ToastStyleProps>`
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 20px;
    display: ${(props) => (props.hasMessage ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 48px;
    padding: 0 16px;
    border-radius: 8px;
    background-color: ${COLORS.gray800};
    transform: translateX(-50%) translateY(${(props) => (props.isVisible ? '0px' : '10%')});
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    animation: ${fadeIn} 0.4s alternate;
    transition: all ease 0.4s;
    overflow: hidden;
  `,
  TextContainer: styled.div<ToastStyleProps>`
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 14px 0;
  `,
};

/**
 * @component
 * 사용자 액션을 유도하거나 메시지를 보여주는 컴포넌트

 * @example
 * <Toast
 *   message="Message"                    // required
 *   lines={1}                            // optional
 *   onCloseToast={() => {}}           // optional
 *   duration="short"                     // optional
 * />
 */
const Toast = ({
  message,
  actionButton,
  lines = 1,
  hasCloseAffordance = false,
  onCloseToast = () => {},
  duration = 'short',
}: ToastProps) => {
  const isVisibleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [onMount, setOnMount] = useState(false);

  const snackbarDuration = typeof duration === 'number' ? duration : TOAST_DURATION[duration];
  const isUserActionRequired = !!(actionButton || hasCloseAffordance);

  const clearTimeoutAll = () => {
    if (isVisibleTimer.current && resetToastTimer.current) {
      clearTimeout(isVisibleTimer.current);
      clearTimeout(resetToastTimer.current);
    }
  };

  useEffect(() => {
    setOnMount(true);
  }, []);

  useEffect(() => {
    clearTimeoutAll();

    setIsVisible(true);

    if (isUserActionRequired) {
      return clearTimeoutAll;
    }

    isVisibleTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, snackbarDuration - 650);
    resetToastTimer.current = setTimeout(onCloseToast, snackbarDuration);

    return clearTimeoutAll;
  }, [duration, isUserActionRequired, onCloseToast, snackbarDuration, message, onMount]);

  return onMount ? (
    ReactDOM.createPortal(
      <S.Container isOneLine={lines === 1} isVisible={isVisible} hasMessage={!!message}>
        <S.TextContainer>
          <Text
            fontSize={16}
            fontWeight={700}
            color={COLORS.gray200}
            whiteSpace="pre-wrap"
            wordBreak="break-all"
            textAlign={isUserActionRequired ? 'left' : 'center'}
          >
            {message}
          </Text>
        </S.TextContainer>
      </S.Container>,
      (document.querySelector('#toast') as Element) ?? document.body,
    )
  ) : (
    <div />
  );
};

export default Toast;
