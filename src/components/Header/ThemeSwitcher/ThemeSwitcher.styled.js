import styled from '@emotion/styled';

export const ThemeSwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.themeSwitcherBackgroundColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    right: 1px;
    bottom: 0.9px;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.themeSwitcherColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    
  }

  input:checked + span {
    background-color: ${(props) => props.theme.themeSwitcherBackgroundColor};
  }

  input:focus + span {
    //box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }
`;