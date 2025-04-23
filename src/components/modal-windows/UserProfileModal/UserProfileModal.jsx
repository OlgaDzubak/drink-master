import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from '../../../redux/auth/authSelectors';
import { updateUser } from '../../../redux/auth/authOperations';
import { toggleIsUserProfileModalOpen } from '../../../redux/modal/modalSlice';
import { ProfileSchema } from '../../../helpers/validateForm/validate-profile';
import { SkeletonRows } from '../../Skeletons/SkeletonRows';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { ErrorMessage, SuccessMessage} from '../../SignUp/FieldInputAuth/FieldInputAuth.styled';
import { ProfileModal, CloseBtn, CloseIcon, 
         AvatarBox, AvatarInputLabel, AvatarInputBox, AvatarInput, 
         PlusSVGBtn, PlusSVG, AvatarImage,
         NameBox, NameInputLabel, NameInput, Edit_icon, 
         SubmitButton, FormError } from './UserProfileModal.styled';
import { BlurStyledBar6, BlurStyledBar7 } from '../../BlurStyledBars/BlurStyledBars.styled';
import { disableTab, enableTab } from '../../../helpers/blockTab';

export const UserProfileModal = () => {

  const { name, avatarURL } = useSelector(selectUser);
  const [selectedAvatarURL, setSelectedAvatarURL] = useState(avatarURL || '');

  const isLoading= useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    disableTab();
    return ()=>{enableTab()}
  }, []) 
  
  const initialValues = {name, avatar: ''};  // initial form values
 

  const handleAvatarChange = (target, setFieldValue) => {
    const file = target.files[0];
    
    if (file) {
      setFieldValue('avatar', file);
      setSelectedAvatarURL(URL.createObjectURL(file));
    } else {
     // setSelectedAvatarURL(null);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    if ((values.name && (values.name !== name)) || values.avatar) {
            
      const formData = new FormData();

      formData.append('avatar', values.avatar);
      formData.append('name', values.name);
      
      await dispatch(updateUser(formData));
    }
    resetForm();
    dispatch(toggleIsUserProfileModalOpen());
  };

  const handleCancel = () => {
      dispatch(toggleIsUserProfileModalOpen());
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  }

  return  <ModalBackdrop onClick={handleBackdropClick}>
    
            <ProfileModal aria-labelledby="profile" className='modal'>
            
              <CloseBtn onClick={handleCancel}>
                <CloseIcon />
              </CloseBtn>

              {
                isLoading 
                    ? <SkeletonRows rows={3} heightArr={[150, 56, 56]}/>
                    : <Formik 
                          initialValues={initialValues} 
                          validationSchema={ProfileSchema} 
                          onSubmit={handleSubmit} 
                      >
                        {({ errors, touched, setFieldValue }) => (
              <Form>
                
                            <AvatarBox>
                                                                      
                              {selectedAvatarURL && <AvatarImage src={selectedAvatarURL} alt="selected user avatar" />}

                              <AvatarInputLabel htmlFor="avatar">

                                <AvatarInputBox>

                                  <AvatarInput
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    onChange={(e) => handleAvatarChange(e.target, setFieldValue)}
                                  />
                                                                            
                                </AvatarInputBox>

                                <PlusSVGBtn type="button">
                                  <PlusSVG />
                                </PlusSVGBtn>

                              </AvatarInputLabel>
                                                                        
                            </AvatarBox>
                                                                        
                            {touched.avatar && errors.avatar ? <FormError>{errors.avatar}</FormError> : null}

                            <NameBox>

                              <NameInputLabel htmlFor='name'>
                                <NameInput id='name' placeholder={initialValues.name} name="name" />
                              </NameInputLabel>
                              <Edit_icon />

                              {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
                              {touched.name && !errors.name ? <SuccessMessage>This is an CORRECT name</SuccessMessage> : null}

                            </NameBox>

                            <SubmitButton type="submit" sx={{ marginTop: '18px' }}>Save changes</SubmitButton>
                            
                          </Form>
                        )}
                      </Formik>
              }

              <BlurStyledBar6/>
              <BlurStyledBar7/>

            </ProfileModal>
    
          </ModalBackdrop>
};
