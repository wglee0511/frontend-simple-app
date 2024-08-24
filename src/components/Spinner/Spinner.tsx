import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLORS } from 'src/themes/colors';

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const S = {
  Container: styled.div<{ isCenter: boolean; marginTop: number; isFullPage: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.isCenter ? 'center' : 'flex-start')};
    align-items: center;
    align-self: center;
    width: 100%;
    height: ${({ isFullPage }) => isFullPage && '100%'};
    margin-top: ${({ marginTop }) => marginTop}px;
    color: ${COLORS.primary700};
  `,
  Spinner: styled.svg`
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;

    circle {
      animation: ${dash} 1.5s ease-in-out infinite;
    }
  `,
};

const Spinner = ({
  isCenter = true,
  marginTop = 0,
  isFullPage = true,
}: {
  isCenter?: boolean;
  marginTop?: number;
  isFullPage?: boolean;
}) => (
  <S.Container isCenter={isCenter} marginTop={marginTop} isFullPage={isFullPage}>
    <S.Spinner viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle
        fill="none"
        stroke={COLORS.primary700}
        strokeWidth="4"
        strokeLinecap="round"
        cx="25"
        cy="25"
        r="20"
      />
    </S.Spinner>
  </S.Container>
);

export default Spinner;
