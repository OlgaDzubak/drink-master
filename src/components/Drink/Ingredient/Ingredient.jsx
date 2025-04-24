import { ImageThumb, Img, IngredientItem, InfoDiv, IngredientName, IngredientMeasure } from './Ingredient.styled';
import coctailPlaceholder from '../../../assets/images/drinkPageImg/coctailPlaceholder.png';


export const Ingredient = ({ photo, title, measure }) => {

  return  <IngredientItem>

            <ImageThumb>
              <Img src={photo ? photo : coctailPlaceholder}/>
            </ImageThumb>

            <InfoDiv>
              <IngredientName>{title}</IngredientName>
              <IngredientMeasure>{measure}</IngredientMeasure>
            </InfoDiv>
      
          </IngredientItem>
};
