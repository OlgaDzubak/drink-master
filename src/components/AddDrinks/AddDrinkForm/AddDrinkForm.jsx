import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addDrinkSchema } from '../../../helpers/validateForm/validate-addDrink';
import { addOwn } from '../../../redux/drinks/own/ownOperations';
import { selectIsLoading } from '../../../redux/drinks/own/ownSelector';
import { FormButton1 } from './AddDrinkForm.styled';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const AddDrinkForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {

    const formData = new FormData();

    // Добавляем значения в FormData
    formData.append('drink', values.drink);
    formData.append('category', values.category);
    formData.append('description', values.description);
    formData.append('alcoholic', values.alcoholic);
    formData.append('instructions', values.instructions);
    formData.append('glass', values.glass);

    // Добавляем изображение
    formData.append('drinkThumb', values.drinkThumb);

    const ingredientsStr = JSON.stringify(values.ingredients);
    formData.append('ingredients', ingredientsStr);

    dispatch(addOwn(formData));

   // resetForm();
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
  
  return  <Formik
            initialValues={initialValues}
            validationSchema={addDrinkSchema}
            onSubmit={handleSubmit}            
          >
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
              
              <Form>

                <DrinkDescriptionFields
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />

                <DrinkIngredientsFields
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />

                <RecipePreparation
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormButton1 type="submit">Add</FormButton1>

              </Form>
            )}

          </Formik>
};

export default AddDrinkForm;
