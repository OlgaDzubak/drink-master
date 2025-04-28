import styled from '@emotion/styled';

//page left blur
export const BlurStyledBar1 = styled.div`
  position: absolute;
  top: -65px;
  left: -700px;
  width: 784px;
  height: 849px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(209.71px);

  @media screen and (min-width: 767px) {
  }
`;
//page right blur
export const BlurStyledBar2 = styled.div`
  position: absolute;
  top: 498px;
  right: calc((100vw - 375px) / 2 - 505px);
  width: 545px;
  height: 545px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(209.71px);

  @media screen and (max-width: 374.98px) {
    right: -505px;
  }
  @media screen and (min-width: 768px) {
    top: 507px;
    //right: -457px;
    right: calc((100vw - 768px) / 2 - 457px);
  }
  @media screen and (min-width: 1280px) {
    top: 458px;
    //right: -272px;
    right: calc((100vw - 1280px) / 2 - 272px);
  }
`;


// home page middle blur
export const BlurStyledBar3 = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 324px;
    right: 193px;
    width: 385px;
    height: 385px;
    border-radius: 50%;
    background: rgba(188, 230, 210, 0.4);
    filter: blur(209.71px);
  }
`;


//footer left blur
export const BlurStyledBar4 = styled.div`
  position: absolute;
  //bottom: -675px;
  left: -372px;
  width: 774px;
  height: 762px;
  border-radius: 50%;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(209.71px);

  @media screen and (min-width: 767px) {
    left:calc(50% - 387px - 140px);
  }
`;
//footer right blur
export const BlurStyledBar5 = styled.div`
  position: absolute;
  //bottom: -764px;
  left: 205px;
  width: 784px;
  height: 849px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(209.71px);

  @media screen and (min-width: 767px) {
    left: calc(50% - 342px + 140px);
  }
`;


//user profile modal window top-left blur
export const BlurStyledBar6 = styled.div`
  position: absolute;
  top: -153px;
  left: -84px;
  width: 283px;
  height: 306px;
  border-radius: 50%;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.854px);
`;

//user profile modal window bottom-right blur
export const BlurStyledBar7 = styled.div`
  position: absolute;
  bottom: -190px;
  right: -229px;
  width: 362px;
  height: 358px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
`;


//mobile menu left blur
export const BlurStyledBar8 = styled.div`
  position: absolute;
  top: -64px;
  left: -399px;
  width: 520px;
  height: 550px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
`;
//mobile menu middle blur
export const BlurStyledBar9 = styled.div`
  position: absolute;
  top: 12px;
  left: 42px;
  width: 257px;
  height: 247px;
  border-radius: 50%;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.854px);
`;
//mobile menu right-bottom blur
export const BlurStyledBar10 = styled.div`
  position: absolute;
  bottom: -314px;
  right: -505px;
  width: 549px;
  height: 543px;
  border-radius: 50%;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
`;