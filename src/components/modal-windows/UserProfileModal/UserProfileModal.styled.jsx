import styled from '@emotion/styled';
import {Field} from 'formik';
import { ReactComponent as closeSvg } from '../../../assets/images/modal/closeIcon.svg';
import { ReactComponent as plusSvg } from '../../../assets/images/modal/addPhoto.svg';
import { BsPencil } from "react-icons/bs";

export const ProfileModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 335px;
  width: 100%;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: #161f37;
  color: var(--white-color);
  z-index: 101;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding: 50px 50px 70px 50px;
    color: var(--blue-color);
  }
`;
export const CloseBtn = styled.button`
  position: absolute;  
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  stroke: var(--white-color);
  transition: background-color var(--transition), stroke var(--transition);
  
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 8px;
  }

  &:hover, &:focus{
    background-color: var(--white-color);
    stroke: var(--blue-color);
  }`;

export const CloseIcon = styled(closeSvg)`
  width: 16px;
  height: 16px;
`;

export const AvatarBox = styled.div`
  position: relative;
  width: 80px;
  height: 94px;
  margin-left: auto;
  margin-right: auto;

  &:hover, &:focus{
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 116px;
  }
`;
export const AvatarInputLabel =  styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;  
  cursor: pointer;
`;
export const AvatarInputBox = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;



  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;
export const AvatarInput = styled.input`
    width: 100%;
    height: 100%;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    pointer-events: none;
`;
export const PlusSVGBtn = styled.div` 
  position: absolute;
  bottom: 0;
  width: 28px;
  height: 28px;
  margin-left: auto;
  margin-right: auto;
`;
export const PlusSVG = styled(plusSvg)`
  width: 100%;
  height: 100%;
`;
export const AvatarImage = styled.img`
  position: absolute;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;


export const NameBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 18px;
  color: var(--whitefifty-color);
  svg{
      fill: var(--whitefifty-color);
      transition: fill var(--transition);
  }

  &:hover, &:focus, &:active{
    color: var(--white-color);
    svg{
      fill: var(--white-color);
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const NameInputLabel = styled.label`
  cursor: pointer;
`;
export const NameInput = styled(Field)`
  width: 100%;
  padding: 14px 48px 14px 24px;
  font-size: 17px;
  line-height: 1.56;
  border: 1px solid currentColor;
  background-color: transparent;
  border-radius: 200px;
  color: currentColor;
  transition: background-color var(--transition), color var(--transition), border-color var(--transition);

  
  ::placeholder {
    color var(--whitefifty-color);
  }
`;
export const Edit_icon = styled(BsPencil)`
  position: absolute;  
  top: 17px;
  right: 24px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const FormError = styled.p`
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
  color : ${(props) => props.theme.formErrorMsgColor};
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  border-radius: 200px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  border: 1px solid var(--white-color);
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: transparent;
  }
  &:active {
    border-color: var(--whitefifty-color);
  }

`;