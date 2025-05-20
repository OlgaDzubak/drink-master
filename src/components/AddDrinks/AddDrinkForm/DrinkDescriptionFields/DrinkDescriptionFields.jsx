import { useState, useEffect } from 'react';
import Select from 'react-select';
import { getCategories, getGlasses } from '../../../../helpers/API/operationsFilters';
import { FormError } from '../AddDrinkForm.styled';
import {  DescriptionDiv, ImgAndErrorDiv, DataAndErrorDiv,
          DescriptionImageDiv, DrinkImage, ImageInputLabel, ImageInput, 
          AddImageDiv, PlusSVGDiv, PlusSVG, AddImageP,
          InputDiv, NameInputLabel, DescriptionInputLabel, Input, 
          SelectInputDiv, SelectLabel, selectStyles,
          RadioDiv, RadioLabel, RadioInput, RadioSpan } from './DrinkDescriptionFields.styled';


export const DrinkDescriptionFields = ({values, errors, touched, handleChange, handleBlur, setFieldValue, themeColors}) => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [$isFocused, setIsFocused] = useState(false);
  const [$hasValue, setHasValue] = useState(false);
  const [$isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [$hasValueDescription, setHasValueDescription] = useState(false);

  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);
  const [$isFocusedCategorySelect, setIsFocusedCategorySelect] = useState(false);

  const [glassesOptions, setGlassesOptions] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);
  const [$isFocusedGlassesSelect, setIsFocusedGlassesSelect] = useState(false);
 
  
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategories();
        const categoryOptions = categories.map((category) => ({value: category, label: category}));
        setCategoriesOptions(categoryOptions);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }

    async function fetchGlasses() {
      try {
        const glasses = await getGlasses();
        const glassesOptions = glasses.map((glass) => ({value: glass, label: glass}));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0] || null;
    setFieldValue('drinkThumb', file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHasValue(value.trim().length > 1);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setHasValueDescription(value.trim().length > 1);
  };

  const handleSelectCategoriesChange = (selectedOption) => {
        setSelectedCategoriesOption(selectedOption  || []);
        setFieldValue(`category`, selectedOption?.value || '');
  };

  const handleSelectGlassesChange = (selectedOption) => {
    setSelectedGlassesOption(selectedOption || []);
    setFieldValue(`glass`, selectedOption?.value || '');
  };

const handleSelectMenuOpen = (e) => {

}

  return  <DescriptionDiv className='description-fields'>
            
            <ImgAndErrorDiv>
            
              <DescriptionImageDiv aria-label="click to add drink photo">

                <ImageInputLabel htmlFor="drinkThumb">
                      
                  <ImageInput
                    type="file"
                    id="drinkThumb"
                    name="drinkThumb"
                    onChange={(e) => handleImageChange(e)}
                  />
                  
                  <AddImageDiv>

                    <PlusSVGDiv className='add-div'>
                      <PlusSVG></PlusSVG>
                    </PlusSVGDiv>


                    <AddImageP>Add image</AddImageP>

                  </AddImageDiv>

                </ImageInputLabel>

                { selectedImage && <DrinkImage src={selectedImage} alt="Selected"/> }
                
              </DescriptionImageDiv>
          
              { touched.drinkThumb && errors.drinkThumb ? <FormError>{errors.drinkThumb}</FormError> : null }
            
            </ImgAndErrorDiv>

            <DataAndErrorDiv>

              <InputDiv className="name">

                <NameInputLabel
                  htmlFor="drink"
                  $isFocused={$isFocused}
                  $hasValue={$hasValue}
                >
                  Enter drink title
                </NameInputLabel>

                <Input
                  type="text"
                  id="drink"
                  name="drink"
                  minLength={2}
                  maxLength={35}
                  onChange={(e) => { handleInputChange(e); handleChange(e) }}
                  onBlur={(e) => { setIsFocused(false); handleBlur(e) }}
                  onFocus={() => setIsFocused(true)}
                  value={values.drink}
                  aria-label="enter a drink name between two and thirty-five characters long"/>

                { touched.drink && errors.drink ? <FormError>{errors.drink}</FormError> : <FormError></FormError>  }

              </InputDiv>

              <InputDiv className="description">

                <DescriptionInputLabel
                  htmlFor="description"
                  $isFocusedDescription={$isFocusedDescription}
                  $hasValueDescription={$hasValueDescription}
                >
                  Enter drink description
                </DescriptionInputLabel>

                <Input
                  type="text"
                  rows={1}
                  minLength={25}
                  maxLength={250}
                  id="description"
                  name="description"
                  onChange={(e) => {handleDescriptionChange(e); handleChange(e); }}
                  onBlur={(e) => { setIsFocusedDescription(false); handleBlur(e); }}
                  onFocus={() => setIsFocusedDescription(true)}
                  value={values.description}
                  aria-label="enter a description of the drink between twenty-five and two hundred and fifty characters long"
                />

                { touched.description && errors.description ? <FormError>{errors.description}</FormError> : <FormError></FormError> }

              </InputDiv>

              <InputDiv className="category">
                <SelectInputDiv>
                  <SelectLabel 
                    htmlFor="category-input"
                    selectedCategory={selectedCategoriesOption.label}
                    $isFocused={$isFocusedCategorySelect}
                  >Choose drink category</SelectLabel>

                  <Select
                    isClearable
                    inputId="category-input"
                    name="category"
                    options={categoryOptions}
                    value={selectedCategoriesOption}
                    onChange={(selectedCategoriesOption) => handleSelectCategoriesChange(selectedCategoriesOption)}
                    onFocus={() => setIsFocusedCategorySelect(true)}
                    onBlur={(e) => { setIsFocusedCategorySelect(false); handleBlur(e) }}
                    styles={selectStyles('199px', '405px', '205px', selectedCategoriesOption, themeColors)}
                    placeholder=""
                    aria-label="select a drink category from pop-up menu"
                  />
                { touched.category && errors.category ? <FormError>{errors.category}</FormError> : <FormError></FormError> }
                </SelectInputDiv>
                
              </InputDiv>

              <InputDiv className="glass">
                <SelectInputDiv >
                  
                  <SelectLabel
                    htmlFor="glass-input"
                    selectedCategory={selectedGlassesOption.label}
                    $isFocused={$isFocusedGlassesSelect}
                  >Choose drink glass
                  </SelectLabel>
          
                  <Select
                    isClearable
                    inputId="glass-input"
                    name="glass"
                    options={glassesOptions}
                    value={selectedGlassesOption}
                    onChange={(selectedGlassesOption) => handleSelectGlassesChange(selectedGlassesOption)}
                    onFocus={() => setIsFocusedGlassesSelect(true)}
                    onBlur={(e) => { setIsFocusedGlassesSelect(false); handleBlur(e) }}
                    onMenuOpen={handleSelectMenuOpen}
                    styles={selectStyles('199px', '305px', '205px', selectedGlassesOption, themeColors)}
                    placeholder=""
                    aria-label="select the type of drink glass from pop-up menu"
                  />
                  { touched.glass && errors.glass ? <FormError>{errors.glass}</FormError> : <FormError></FormError> }
                </SelectInputDiv>
                
              </InputDiv>

              <RadioDiv className="alcoholic">

                <RadioLabel className={values.alcoholic === 'Alcoholic' ? 'checked' : ''}>

                  <RadioInput
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    checked={values.alcoholic === 'Alcoholic'}
                    onChange={handleChange}
                    aria-label="click the radio button if drink is alcoholic"
                  />
                  <RadioSpan></RadioSpan>
                  Alcoholic
                </RadioLabel>

                <RadioLabel className={values.alcoholic === 'Non alcoholic' ? 'checked' : ''}>
                  
                  <RadioInput
                    type="radio"
                    name="alcoholic"
                    value="Non alcoholic"
                    checked={values.alcoholic === 'Non alcoholic'}
                    onChange={handleChange}
                    aria-label="click the radio button if drink is non-alcoholic"
                  />
                  <RadioSpan></RadioSpan>
                  Non-alcoholic
                </RadioLabel>

                { touched.alcoholic && errors.alcoholic ? <FormError>{errors.alcoholic}</FormError> : null }

              </RadioDiv> 

            </DataAndErrorDiv>

          </DescriptionDiv>
}