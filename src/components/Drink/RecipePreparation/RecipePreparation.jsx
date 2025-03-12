import { DrinkPageImg } from '../DrinkPageImg/DrinkPageImg';
import { RecipeSection, Title, Recipe, Preparation } from './RecipePreparation.style';

export const RecipePreparation = ({ coctailInfo }) => {

  const instructions = coctailInfo !== null ? coctailInfo.instructions : '';
  const description = coctailInfo !== null ? coctailInfo.description : '';

  return  <RecipeSection>

            <Title>Recipe Preparation</Title>

            <Recipe>

              <div>
                <Preparation style={{marginBottom : 40}}> {description} </Preparation>
                <Preparation> {instructions} </Preparation>
              </div>

              <DrinkPageImg />

            </Recipe>
          </RecipeSection>
};
