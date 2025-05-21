import { useState } from 'react';
import {StyledFieldContainer, InputAndIconContainer, StyledField, IconButton, 
        ErrorMessage, SuccessMessage,
        CloseEyeIcon, OpenEyeIcon } from './FieldInputAuth.styled';


export const FieldInputAuthPass = ({ errors, touched, ariaLabel }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <StyledFieldContainer>

        <InputAndIconContainer>

          <StyledField
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            error={errors.password && touched.password ? 'true' : 'false'}
            success={touched.password && !errors.password ? 'true' : 'false'}
            aria-label={ariaLabel}
          />

          <IconButton type="button" onClick={handleClickPassword} aria-label={showPassword ? "hide pasword" : "show password"}>
            {showPassword ? <OpenEyeIcon/> : <CloseEyeIcon/>}
          </IconButton>
        
        </InputAndIconContainer>

        {errors.password && touched.password ? <ErrorMessage>{errors.password}</ErrorMessage> : null}
        {touched.password && !errors.password ? <SuccessMessage color="#3CBC81">This is an CORRECT password</SuccessMessage> : null}

      </StyledFieldContainer>
    </>
  );
};