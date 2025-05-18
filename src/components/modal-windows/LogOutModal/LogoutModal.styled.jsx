import styled from '@emotion/styled';

export const LogOutWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 50px;
  text-align: center;
  z-index: 2000;
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

export const ButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MessageText = styled.p`
  color: var(--white-color);
`;

export const ModalBtn = styled.button`
  width: 190px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  color: var(--blue-color);
  background-color: var(--white-color);
  border: 1px solid var(--white-color);
  border-radius: 22px;
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);

  &:hover, &:focus {
    color: var(--white-color);
    background-color: var(--blue-color);
  }
  &:active {
    border-color: var(--whitefifty-color);
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;