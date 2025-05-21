import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getIngredients } from '../../../../helpers/API/operationsFilters';
import { FormError } from '../AddDrinkForm.styled';
import { IngredientsDiv, IngredientsTitle,
         ControlDiv, Controls, ControlsButton, ControlMinuse, ControlPluse,
         IngredientsList, IngredientsListItem, DataDiv, IngredientNameDiv, 
         IngredientMeasureDiv, IngredientsInput, IngredientSelectLabel, 
         DelBtnDiv, BtnDiv, IngredientsDelBtn, IngredientsDelSvg,
         CreatableSelectStyles } from './DrinkIngredientsFields.styled';


export const DrinkIngredientsFields = ({ values, errors, touched, handleChange, handleBlur, setFieldValue, themeColors }) => {
  
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await getIngredients();
        const ingredientOptions = ingredients.map((ingredient) => ({
          label: ingredient.title,
          value: ingredient._id,
        }));
        setOptions(ingredientOptions);
      } catch (error) {
        console.error('Ошибка при загрузке ингридиента:', error);
      }
    }

    fetchIngredients();
  }, []);

  const handleSelectChange = (selectedOption, index) => {

    let value = '', label = '';

    if (selectedOption){
       value = selectedOption.value;
       label = selectedOption.label;
    }

    setFieldValue(`ingredients[${index}].title`, label);
    setFieldValue(`ingredients[${index}]._id`, value);

    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = selectedOption;
      return newOptions;
    });
  };

  const handleAddIngredient = () => {
    const newIngredient = { name: '' };
    setFieldValue('ingredients', [...values.ingredients, newIngredient]);
    setSelectedOptions((prevOptions) => [...prevOptions, null]);
  };

  const handleRemoveIngredient = (index) => {
    
    const newIngredients = [...values.ingredients];
    
    if (newIngredients.length === 1){
      setFieldValue('ingredients',  [{title : '', measure : ''}]);
      setSelectedOptions((prevOptions) => []);
    }else{
      newIngredients.splice(index, 1);
      setFieldValue('ingredients', newIngredients);
      setSelectedOptions((prevOptions) => {
        const newOptions = [...prevOptions];
        newOptions.splice(index, 1);
        return newOptions;
      });
    }
  };

  const isRemoveButtonDisabled = values.ingredients.length === 1;

  return <IngredientsDiv className="ingredients-fields" aria-labelledby='ingredients-title'>

          <ControlDiv>

            <IngredientsTitle id="ingredients-title">Ingredients</IngredientsTitle>

            <Controls>

              <ControlsButton 
                type="button"
                onClick={() => handleRemoveIngredient(values.ingredients.length - 1)}
                disabled={isRemoveButtonDisabled}
                aria-label='remove ingredient'
              >
                <ControlMinuse></ControlMinuse>
              </ControlsButton>

              <div>{values.ingredients.length}</div>

              <ControlsButton 
                type="button" 
                onClick={handleAddIngredient}
                aria-label='add ingredient'
              >
                <ControlPluse></ControlPluse>
              </ControlsButton>

            </Controls>

          </ControlDiv>

          <IngredientsList>

            {values.ingredients.map((ingredient, index) =>  (
              
                <IngredientsListItem key={index}>

                  <DataDiv>
                    <IngredientNameDiv>
                      
                      <IngredientSelectLabel>
                        <Select
                          isClearable
                          name={`ingredients[${index}].title`}
                          placeholder = "Ingredient"
                          value={selectedOptions[index] || null}
                          options={options}                
                          onChange={(selectedOption) => handleSelectChange(selectedOption, index)}
                          onBlur={handleBlur}
                          styles={CreatableSelectStyles(selectedOptions[index], themeColors)}
                          aria-label="ingredient name"
                        />
                      </IngredientSelectLabel>

                      {
                        touched.ingredients && errors.ingredients && touched.ingredients[index] &&
                        errors.ingredients[index]?.title ? <FormError>{errors.ingredients[index]?.title || ""}</FormError> : <FormError></FormError>
                      }
                    </IngredientNameDiv>

                    <IngredientMeasureDiv>

                      <IngredientsInput
                        type="text"
                        name={`ingredients[${index}].measure`}
                        placeholder="1 cl"
                        maxLength={15}
                        value={ingredient.measure || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-label="ingredient measure"
                      />

                      {
                        touched.ingredients && errors.ingredients && touched.ingredients[index] &&
                        errors.ingredients[index]?.measure ? <FormError>{errors.ingredients[index].measure} </FormError> : <FormError></FormError>
                      }

                    </IngredientMeasureDiv>
                  </DataDiv>

                  <DelBtnDiv>

                    <BtnDiv>
                      <IngredientsDelBtn
                        type="button"
                        onClick={() => handleRemoveIngredient(index)}
                        aria-label='remove ingredient'
                      >
                        <IngredientsDelSvg/>
                      </IngredientsDelBtn>
                    </BtnDiv>

                    <FormError></FormError>
                  </DelBtnDiv>

                </IngredientsListItem>
            ))}

          </IngredientsList>

         </IngredientsDiv>
};