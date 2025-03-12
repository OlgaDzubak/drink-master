import { useState } from 'react';
import Select from 'react-select';
import createSelectOptions from '../../../helpers/createSelectOptions';
import { FilterForm, Styled_InputLabel, Styled_Input, LookUpSpan, 
         Styled_Span_for_Input_and_LookUpIcon, LookUpIcon, CreatableSelectStyles } from './Filter.styled';
  

//компонент Filter для сторінки Drinks Page ---------------------------------------------------------------------------------

  const Filter = ( {categoryList, ingredientList, onChangeFilter} ) => {
      
      //стан
      const [category, setCategory] = useState("");
      const [ingredient, setIngredient] = useState("");

      const handleInputChange = (e) => { 
        onChangeFilter("keyword", e.target.value);
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
                
                {/* keyword input */}
                  <Styled_InputLabel>

                    <Styled_Span_for_Input_and_LookUpIcon>

                        <Styled_Input
                          type = "text"
                          placeholder = "Enter the text"
                          id={"inputKeyword"}  
                          onChange={handleInputChange}
                        />

                        <LookUpSpan> 
                            <LookUpIcon/>
                        </LookUpSpan>

                    </Styled_Span_for_Input_and_LookUpIcon>

                  </Styled_InputLabel>
                              

                {/* caregory select */}
                  <Select
                    isClearable
                    placeholder = "All categories"
                    options={createSelectOptions(categoryList)}
                    onChange={handleCategoryChange}
                    styles={CreatableSelectStyles('300px','297px', category)} 
                    name = {"categories"}
                  />

                {/* ingredient select */}
                  <Select
                    isClearable
                    placeholder = "Ingredients"
                    options={createSelectOptions(ingredientList)}
                    defaultValue={"Ingredients"}
                    onChange={handleIngredientsChange}
                    styles={CreatableSelectStyles('280px','276px', ingredient)}
                    name = {"ingredients"}
                  />
        
              </FilterForm>
  }

//---------------------------------------------------------------------------------------------------------------------------

export default Filter;