// СТИЛІ ДЛЯ КОМПОНЕНТІВ ОДНОГО ІНПУТА В ФОРМІ АВТОРИЗАЦІЇ/РЕГІСТРАЦІЇ (Sign up / Sign in)

import styled from '@emotion/styled';
import { Field } from 'formik';
import { MdCheckCircleOutline , MdErrorOutline } from "react-icons/md";
import { IoEye , IoEyeOff } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";


// контейнер для інпута, кнопки-іконки та повідомлення про корректність/некорректність введення даних
export const  StyledFieldContainer = styled.div`
  position: relative;  
  width: 100%;
`;

// контейнер для інпута та кнопки-іконки
export const InputAndIconContainer = styled.div`
  position: relative;
  transition: color var(--transition);

  :hover, 
  :focus {
    input {
      border-color: var(--whitefifty-color);
      color: var(--white-color);
      &::placeholder{
        color: var(--white-color);
      }
    }
  }
`;

//інпут
export const StyledField = styled(Field)`
  max-width: 400px;
  width: 100%;
  padding-top: 17.24px;
  padding-left: 24px;
  padding-right: 55px;
  padding-bottom: 17.25px;
  line-height: 1.28;
  font-size: 14px;
  outline:none;

  border: 1px solid ${(props) => props.error === 'true'
                                            ? 'var(--red-color)'
                                            : props.success === 'true'
                                                ? 'var(--green-color)'
                                                : 'var(--whitetwenty-color)'};

  background-color: transparent;
  border-radius: 24px;
  color: var(--white-color);
  transition: border-color var(--transition), color var(--transition);

  +button {
    color: ${(props) => (props.error==="true" || props.success==="true") ? "var(--white-color);" : "var(--whitefifty-color);"} 
  }

  ::placeholder {
    color: var(--whitefifty-color);
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 156%;
    transition: color var(--transition);
  }

  :hover,
  :focus {
    
    border: 1px solid var(--whitefifty-color);
    
    ::placeholder {
      color: var(--white-color);
    }

    +button {
      color: var(--white-color); 
    }
  } 


  @media screen and (min-width: 768px) {
    padding-top: 13.94px;
    padding-bottom: 13.95px;
    //width: 400px;
    line-height: 1.56;
    font-size: 17px;
  }
`;

//кнопка з іконкою в інпуті
export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  color: var(--whitefifty-color);
  border: none;
  transform: translateY(-50%);

  &:hover,
  &:focus{
    color: var(--white-color);
  }

  svg{
    transition: color var(--transition);
  }
`;

// іконка, яка з'являється в інпуті разом з ErrorMessage
export const CheckIconError  = styled(MdErrorOutline)`
  position: absolute;
  top: 50%;
  right: 24px;
  width: 24px;
  height: 24px;
  color: var(--red-color);
  transform: translateY(-50%);
`;

// іконка, яка з'являється в інпуті разом з SuccessMessage
export const CheckIconOk  = styled(MdCheckCircleOutline)`
    position: absolute;
    top: 50%;
    right: 24px;
    width: 24px;
    height: 24px;
    color: var(--green-color);
    transform: translateY(-50%);
`;

// іконка календаря для інпуту дати народження
export const CalendarIcon = styled(FiCalendar)`
  width: 24px;
  height: 24px;
`;

// іконка відкритого ока для інпуту пароля
export const OpenEyeIcon = styled(IoEye)`  
  width: 24px;
  height: 24px;
`;

// іконка закритого ока для інпуту пароля
export const CloseEyeIcon = styled(IoEyeOff)`
  width: 24px;
  height: 24px;
`;

//повідомлення про помилку введення даних під інпутом
export const ErrorMessage = styled.p`
  margin-top: 8px;
  margin-left: 24px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.167;
  color: var(--red-color);
`;

//повідомлення про коректність введення дпних під інпутом
export const SuccessMessage = styled.p`
  margin-top: 8px;
  margin-left: 24px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.167;
  color: var(--green-color);
`;