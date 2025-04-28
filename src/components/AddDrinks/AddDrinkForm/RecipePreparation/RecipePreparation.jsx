import { useState } from 'react';
import { RecipeTitle, RecipeDiv, RecipeLabel, RecipeTextArea } from './RecipePreparation.styled';
import { FormError } from '../AddDrinkForm.styled';


export const RecipePreparation = ({values, errors, touched, handleChange, handleBlur}) => {

  const [$isFocusedPreparation, setIsFocusedPreparation] = useState(false);
  const [$hasValuePreparation, setHasValuePreparation] = useState(false);

  const handlePreparationChange = (e) => {
    const { value } = e.target;
    setHasValuePreparation(value.trim().length > 0);
  };
  
  return  <>
            <RecipeTitle>Recipe Preparation</RecipeTitle>

            <RecipeDiv>

              <RecipeLabel
                htmlFor="instructions"
                $isFocusedPreparation={$isFocusedPreparation}
                $hasValuePreparation={$hasValuePreparation}
              >Enter the recipe
              </RecipeLabel>

              <RecipeTextArea
                id="instructions"
                name="instructions"
                rows="6"
                onChange={(e) => {handlePreparationChange(e); handleChange(e);}}
                onBlur={(e) => {setIsFocusedPreparation(false); handleBlur(e);}}
                onFocus={() => setIsFocusedPreparation(true)}
                value={values.instructions}
                placeholder=" "
              />

              { touched.instructions && errors.instructions ? <FormError>{errors.instructions}</FormError> : <FormError></FormError> }

            </RecipeDiv>

          </>
};
