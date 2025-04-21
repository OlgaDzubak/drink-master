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
  
  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);
  const [glassesOptions, setGlassesOptions] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [$isFocused, setIsFocused] = useState(false);
  const [$hasValue, setHasValue] = useState(false);
  const [$isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [$hasValueDescription, setHasValueDescription] = useState(false);


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

  return  <DescriptionDiv className='description-fields'>
            
            <ImgAndErrorDiv>
            
              <DescriptionImageDiv>

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
                  Enter item title
                </NameInputLabel>

                <Input
                  type="text"
                  id="drink"
                  name="drink"
                  minLength={2}
                  maxLength={30}
                  onChange={(e) => { handleInputChange(e); handleChange(e) }}
                  onBlur={(e) => { setIsFocused(false); handleBlur(e) }}
                  onFocus={() => setIsFocused(true)}
                  value={values.drink}
                />

                { touched.drink && errors.drink ? <FormError>{errors.drink}</FormError> : <FormError></FormError>  }

              </InputDiv>

              <InputDiv className="description">

                <DescriptionInputLabel
                  htmlFor="description"
                  $isFocusedDescription={$isFocusedDescription}
                  $hasValueDescription={$hasValueDescription}
                >
                  Enter about recipe
                </DescriptionInputLabel>

                <Input
                  type="text"
                  rows={1}
                  minLength={25}
                  maxLength={234}
                  id="description"
                  name="description"
                  onChange={(e) => {handleDescriptionChange(e); handleChange(e); }}
                  onBlur={(e) => { setIsFocusedDescription(false); handleBlur(e); }}
                  onFocus={() => setIsFocusedDescription(true)}
                  value={values.description}
                />

                { touched.description && errors.description ? <FormError>{errors.description}</FormError> : <FormError></FormError> }

              </InputDiv>

              <InputDiv className="drink-categories">
                <SelectInputDiv>
                  <SelectLabel htmlFor="categories" selectedCategory={selectedCategoriesOption.label}>Category</SelectLabel>
                  <Select
                    isClearable
                    id="categories"
                    options={categoryOptions}
                    value={selectedCategoriesOption}
                    onChange={(selectedCategoriesOption) => handleSelectCategoriesChange(selectedCategoriesOption)}
                    styles={selectStyles('199px', '405px', '205px', selectedCategoriesOption, themeColors)}
                    placeholder=""
                  />
                </SelectInputDiv>
                { touched.category && errors.category ? <FormError>{errors.category}</FormError> : <FormError></FormError> }
              </InputDiv>

              <InputDiv className="drink-glasses">
                <SelectInputDiv>
                  <SelectLabel htmlFor="drink-glasses" selectedCategory={selectedGlassesOption.label}>Glass</SelectLabel>
                  <Select
                    isClearable
                    name="drink-glasses"
                    options={glassesOptions}
                    value={selectedGlassesOption}
                    onChange={(selectedGlassesOption) => handleSelectGlassesChange(selectedGlassesOption)}
                    styles={selectStyles('199px', '305px' ,'205px', selectedGlassesOption, themeColors)}
                    placeholder=""
                  />
                </SelectInputDiv>
                { touched.glass && errors.glass ? <FormError>{errors.glass}</FormError> : <FormError></FormError> }
              </InputDiv>

              <RadioDiv className="alcoholic">

                <RadioLabel className={values.alcoholic === 'Alcoholic' ? 'checked' : ''}>

                  <RadioInput
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    checked={values.alcoholic === 'Alcoholic'}
                    onChange={handleChange}
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
                  />
                  <RadioSpan></RadioSpan>
                  Non-alcoholic
                </RadioLabel>

                { touched.alcoholic && errors.alcoholic ? <FormError>{errors.alcoholic}</FormError> : null }

              </RadioDiv> 

            </DataAndErrorDiv>

          </DescriptionDiv>
}