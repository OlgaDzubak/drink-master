import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ReactComponent as LoaderIcon } from '../../assets/images/loader.svg';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${(props) => props.theme ? props.theme.mainTextColor : "#F3F3F3"};
  fill: ${(props) => props.theme ? props.theme.mainTextColor : "#F3F3F3"};
  stroke: ${(props) => props.theme ? props.theme.mainTextColor : "#F3F3F3"};
`;

export const LoaderSVG = styled(LoaderIcon)`
  animation: ${bounce} 1s ease infinite;

  @media (min-width: 375px) {
    width: 220px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

export const LoaderText = styled.p`
  color: ${(props) => props.theme ? props.theme.mainTextColor : "#F3F3F3"};
  font-size: 24px;
  font-weight: 600;
`;
