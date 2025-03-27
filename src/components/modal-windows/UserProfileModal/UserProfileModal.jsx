import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from '../../../redux/auth/authSelectors';
import { updateUser } from '../../../redux/auth/authOperations';
import { toggleIsUserProfileModalOpen } from '../../../redux/modal/modalSlice';
import { ProfileSchema } from '../../../helpers/validateForm/validate-profile';
import { SkeletonRows } from '../../Skeletons/SkeletonRows';
import { ErrorMessage, SuccessMessage} from '../../SignUp/FieldInputAuth/FieldInputAuth.styled';
import { ProfileModal, CloseBtn, CloseIcon, 
         AvatarBox, AvatarInputLabel, AvatarInputBox, AvatarInput, 
         PlusSVGBtn, PlusSVG, AvatarImage,
         NameBox, NameInputLabel, NameInput, Edit_icon, 
         SubmitButton, FormError } from './UserProfileModal.styled';
import { BlurStyledBar6, BlurStyledBar7 } from '../../BlurStyledBars/BlurStyledBars.styled';

export const UserProfileModal = () => {

  const { name, avatarURL } = useSelector(selectUser);
  const [selectedAvatarURL, setSelectedAvatarURL] = useState(avatarURL || '');

  const isLoading= useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const initialValues = {name, avatar: ''};  // initial form values
 

  const handleAvatarChange = (target, setFieldValue) => {
    const file = target.files[0];
    setFieldValue('avatar', file);
    if (file) {
      setSelectedAvatarURL(URL.createObjectURL(file));
    } else {
      setSelectedAvatarURL(null);
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
    dispatch(toggleIsUserProkfileModalOpen());
  };


  return  <ProfileModal aria-labelledby="profile">
            
            <CloseBtn onClick={()=>dispatch(toggleIsUserProfileModalOpen())}>
              <CloseIcon />
            </CloseBtn>

            {
              isLoading 
                  ? <SkeletonRows totalRow={3} heightArr={[150, 56, 56]}/>
                  : <Formik 
                        initialValues={initialValues} 
                        validationSchema={ProfileSchema} 
                        onSubmit={handleSubmit} 
                    >
                          {({ errors, touched, setFieldValue}) => (

                              <Form>

                                <AvatarBox>
                                
                                { selectedAvatarURL && <AvatarImage src={selectedAvatarURL} alt="selected user avatar"/> }

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
                                        <PlusSVG/>
                                    </PlusSVGBtn>

                                  </AvatarInputLabel>
                                  
                                  </AvatarBox>
                                  
                                  { touched.avatar && errors.avatar ? <FormError>{errors.avatar}</FormError> : null }

                                <NameBox>

                                  <NameInputLabel htmlFor='name'>
                                    <NameInput id='name' placeholder={initialValues.name} name="name" />
                                  </NameInputLabel>
                                  <Edit_icon />

                                { errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null }
                                { touched.name && !errors.name ? <SuccessMessage>This is an CORRECT name</SuccessMessage> : null }

                                </NameBox>

                                <SubmitButton type="submit" sx={{ marginTop: '18px' }}>Save changes</SubmitButton>

                              </Form>)
                          }
                    </Formik>
            }

            <BlurStyledBar6/>
            <BlurStyledBar7/>

          </ProfileModal>
};
