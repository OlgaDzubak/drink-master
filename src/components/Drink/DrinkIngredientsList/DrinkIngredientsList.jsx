import { useEffect, useState } from 'react';
import { getIngredients} from '../../../helpers/API/operationsFilters';
import { Ingredient } from '../Ingredient/Ingredient';
import { IngredientsSection, Title, IngredientList } from './DrinkIngredientsList.styled';

export const DrinkIngredientsList = ({ coctailInfo }) => {
  
  const [ingredientsData, setIngredientsData] = useState([]);
  const ingredients = coctailInfo !== null ? coctailInfo.ingredients : [];

  const ingredientsIdArr = ingredients.map(
    (ingredient) => ingredient.ingredientId,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        if (data.length !== 0) {
          const ingredientsImages = data.filter((item) =>
            ingredientsIdArr.includes(item._id),
          );
          setIngredientsData(ingredientsImages);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [coctailInfo]);

  const combinedIngredients = ingredients.map((ingredient) => {
    const ingredientData = ingredientsData.find(
      (data) => data._id === ingredient.ingredientId
    );
    return {
      ...ingredient,
      ingredientThumb: ingredientData ? ingredientData.ingredientThumb : null,
    };
  });

  return  <IngredientsSection>

            <Title>Ingredients</Title>

            <IngredientList>
              {
                combinedIngredients.map(({ title, measure, ingredientId, ingredientThumb }) => (
                  <Ingredient title={title} measure={measure} key={ingredientId} photo={ingredientThumb} />
                ))
              }
            </IngredientList>

          </IngredientsSection>

};