import styled from '@emotion/styled';

export const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '0px'};
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: ${(props) => props.height || '40px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  background-image: linear-gradient(90deg, rgba(100,100,100, 0.1), rgba(150,150,150, 0.12), rgba(200,200,200, 0.15), rgba(243,243,243, 0.2), rgba(200,200,200, 0.15), rgba(150,150,150, 0.12), rgba(100,100,100, 0.1));
  animation-name: g-wave;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  background-size: 400% 56px;
  border-radius: 5px;

  @keyframes g-wave {
    0%  {
      background-position-x: 0%;
    }
    50% {
      background-position-x: 100%;
    }  
  }
`;

  export const Div = styled.div`
    display: flex;
    gap: 30px;
`;