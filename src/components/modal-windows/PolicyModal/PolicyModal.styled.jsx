import styled from '@emotion/styled';

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
  overflow: hidden;
  
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
    color: var(--whiteeighty-color);
  }

  ul{
    list-style-type: numeric;
    font-size: 15px;
    color: var(--whiteeighty-color);

    li{
      :not(:last-child) {
        margin-bottom: 15px;
      }
    } 
  }
`;
