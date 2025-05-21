import { useState, useContext } from 'react';
import Select from 'react-select';
import { GlobalContext } from "../../../context/GlobalContext";
import createSelectOptions from '../../../helpers/createSelectOptions';
import { FilterForm, Styled_InputLabel, Styled_Input, LookUpSpan, 
         Styled_Span_for_Input_and_LookUpIcon, LookUpIcon, CreatableSelectStyles } from './Filter.styled';
import {DARK_THEME, LIGHT_THEME} from '../../../theme/theme';

//компонент Filter для сторінки Drinks Page ---------------------------------------------------------------------------------
  const Filter = ( {categoryList, ingredientList, onChangeFilter } ) => {
    
    const { theme } = useContext(GlobalContext);
    const themeColors = (theme === "dark") ? {...DARK_THEME} : {...LIGHT_THEME};

      //стан
      const [category, setCategory] = useState("");
      const [ingredient, setIngredient] = useState("");

      const handleInputChange = (e) => { 
        onChangeFilter("keyword", e.target.value.trim());
      }

      const handleCategoryChange = (option, action) => { 
        if (option) onChangeFilter("category", option.value);
        else onChangeFilter("category", "");
      }
      
      const handleIngredientsChange = (option, action) => { 
        if (option) onChangeFilter("ingredient", option.value);
        else onChangeFilter("ingredient","");
      }


      return  <FilterForm >
                
                  <Styled_InputLabel>

                    <Styled_Span_for_Input_and_LookUpIcon>

                        <Styled_Input
                          type = "text"
                          placeholder="Enter the text"
                          id={"inputKeyword"}  
                          onChange={handleInputChange}
                          aria-label='filter keyword'
                        />

                        <LookUpSpan> 
                            <LookUpIcon/>
                        </LookUpSpan>

                    </Styled_Span_for_Input_and_LookUpIcon>

                  </Styled_InputLabel>

                  <Select
                    isClearable
                    placeholder = "All categories"
                    options={createSelectOptions(categoryList)}
                    onChange={handleCategoryChange}
                    styles={CreatableSelectStyles('300px','297px', category, themeColors)} 
                    name = {"categories"}
                    aria-label='drink category'
                  />

                  <Select
                    isClearable
                    placeholder = "Ingredients"
                    options={createSelectOptions(ingredientList)}
                    defaultValue={"Ingredients"}
                    onChange={handleIngredientsChange}
                    styles={CreatableSelectStyles('280px','276px', ingredient, themeColors)}
                    name = {"ingredients"}
                    aria-label='drink ingredient'
                  />
        
              </FilterForm>
  }

//---------------------------------------------------------------------------------------------------------------------------

export default Filter;