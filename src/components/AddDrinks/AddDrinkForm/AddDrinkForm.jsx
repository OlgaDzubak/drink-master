import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from '../../Loader/Loader.styled';
import { GlobalContext } from '../../../context/GlobalContext';
import { DARK_THEME, LIGHT_THEME } from '../../../theme/theme';
import { selectIsLoading, selectAdded } from '../../../redux/drinks/own/ownSelector';
import { addOwn } from '../../../redux/drinks/own/ownOperations';
import { addDrinkSchema } from '../../../helpers/validateForm/validate-addDrink';
import { AddDrinkFormSection, SubmitButton } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import SectionTitle from "../../Titles/SectionTitle";

export const AddDrinkForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { theme } = useContext(GlobalContext);
  const themeColors = (theme === "dark") ? {...DARK_THEME} : {...LIGHT_THEME};

  const isLoading = useSelector(selectIsLoading);
  const added = useSelector(selectAdded);

  useEffect(()=>{
    if (added){
      navigate('/my');
    }
  },[added]);


  const handleSubmit = async (values, { resetForm }) => {

    const formData = new FormData();

    formData.append('drink', values.drink);
    formData.append('category', values.category);
    formData.append('shortDescription', values.description);
    formData.append('description', values.description);
    formData.append('alcoholic', values.alcoholic);
    formData.append('instructions', values.instructions);
    formData.append('glass', values.glass);
    formData.append('drinkThumb', values.drinkThumb);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    
    dispatch(addOwn(formData));
  }

  const initialValues = {
    drink: '',
    description: '',
    ingredients: [{ title: '', measure: ''}],
    instructions: '',
    category: '',
    glass: '',
    alcoholic: 'Non alcoholic',
    drinkThumb: '',
  };

  return  <AddDrinkFormSection>
    
            <SectionTitle title={"Add drink form"} hidden={true} />
    
            <Formik
              initialValues={initialValues}
              validationSchema={addDrinkSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => 
              
                <Form>

                    <DrinkDescriptionFields
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      themeColors={themeColors}
                    />

                    <DrinkIngredientsFields
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      themeColors={themeColors}
                    />

                    <RecipePreparation
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />

                    <SubmitButton type="submit" aria-label="click button to add new drink to your own collection">Add</SubmitButton>

                </Form>
              }
              
            </Formik>

            { isLoading && <Loader><ThreeDots color="currentColor" width="60" /></Loader>}

          </AddDrinkFormSection>


}
