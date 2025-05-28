import styled from '@emotion/styled';

export const LoweLiner = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPar = styled.p`
  color: var(--whitefifty-color);
`;

export const TermsWrapper = styled.div`
  width: 309px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TermsButtons = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: var(--whitefifty-color);
`;

export const TermsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 40px 40px 50px;  
  width: 80%;
  height: 90vh;
  background-color: var(--blue-color);
  border-radius: 10px;  
  box-shadow: 0px 0px 0px 1px var(--whitefifty-color);
  overflow: auto;
  z-index: 2000;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: var(--blue-color);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--whitefifty-color);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h3 {
    color: var(--whitefifty-color);
  }
`;

export const StyledModalUl = styled.ul`
  list-style-type: numeric;
  font-size: 15px;
  color: var(--whitefifty-color);

  li{
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

