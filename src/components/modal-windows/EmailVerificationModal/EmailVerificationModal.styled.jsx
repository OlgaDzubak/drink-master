import styled from '@emotion/styled';

export const EmailVerificationWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 50px;
  text-align: center;
  z-index: 101;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 1px var(--blue-color);
  background-color: var(--blue-color);
  color: var(--white-color);

  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 30px;
  }
  @media screen and (max-width: 420px) {
    width: 350px;
    padding: 15px;
  }
`;
export const VerificationModalTitle = styled.h2`
  color: currentColor;
  margin-bottom: 40px;
  font-size: 30px;
`;
export const VerificationModalSubtitle = styled.p`
  color: currentColor;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Emailspan = styled.span`
   color: var(--green-color);
`;

export const MessageText = styled.p`
  color: currentColor;
  margin-bottom: 30px;
  font-size: 14px;
`;


