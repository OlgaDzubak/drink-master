import { DrinkPageImg } from '../DrinkPageImg/DrinkPageImg';
import { RecipeSection, Title, Recipe, Preparation } from './RecipePreparation.styled';

export const RecipePreparation = ({ coctailInfo }) => {

  const instructions = coctailInfo !== null ? coctailInfo.instructions : '';
  const description = coctailInfo !== null ? coctailInfo.description : '';

  return  <RecipeSection aria-labelledby='recipe-preparation'>

            <Title id="recipe-preparation">Recipe Preparation</Title>

            <Recipe>

              <div>
                <Preparation style={{marginBottom : 40}}> {description} </Preparation>
                <Preparation> {instructions} </Preparation>
              </div>

              <DrinkPageImg />

            </Recipe>
          </RecipeSection>
};
