import {StyledFieldContainer, 
        InputAndIconContainer,
        StyledField, 
        ErrorMessage, 
        SuccessMessage, 
        CheckIconError, 
        CheckIconOk} from './FieldInputAuth.styled';
export const FieldInputAuth = ({ errors, touched, name, placeholder, id, showCheckIcon }) => {

  return (
    <>
        <StyledFieldContainer>
          
          <InputAndIconContainer>

            <StyledField id={id} name={name} placeholder={placeholder} autoComplete="off" minLength="2" maxLength="40" 
              error={errors[name] && touched[name] ? 'true' : 'false'}
              success={touched[name] && !errors[name] ? 'true' : 'false'}
            />
            
            {showCheckIcon && errors[name] && touched[name] && <CheckIconError/>}
            {showCheckIcon && touched[name] && !errors[name] && <CheckIconOk/>}
          
          </InputAndIconContainer>

        { (errors[name] && touched[name]) ? <ErrorMessage>{errors[name]}</ErrorMessage> : null }
        { (touched[name] && !errors[name]) ? <SuccessMessage color="#3CBC81">This is an CORRECT {name}</SuccessMessage> : null }
        
        </StyledFieldContainer>
    </>
  );
};
