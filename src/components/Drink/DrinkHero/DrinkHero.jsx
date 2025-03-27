import { useEffect, useState } from 'react';
import { AddToFavoriteBtn } from '../AddToFavoriteBtn/AddToFavoriteBtn';
import { DrinkHeroSection, BoxWrapper, ShortDescr, SubTitle } from './DrinkHero.style';
import { CoctailImg } from '../CoctailImg/CoctailImg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../redux/drinks/favorites/favoritesOperations';
import { selectFavoriteItems } from '../../../redux/drinks/favorites/favoriteSelectors';
import PageTitle from '../../PageTitle/PageTitle';

export const DrinkHero = ({ coctailInfo }) => {
  
  const favorits = useSelector(selectFavoriteItems);

  const title = coctailInfo !== null ? coctailInfo.drink : '';
  const glass = coctailInfo !== null ? coctailInfo.glass : '';
  const alcoholic = coctailInfo !== null ? coctailInfo.alcoholic : '';
  const description = coctailInfo !== null ? coctailInfo.shortDescription : '';
  const image = coctailInfo !== null ? coctailInfo.drinkThumb : 'image';
  const id = coctailInfo !== null ? coctailInfo._id : '';
  const dispatch = useDispatch();
  const [addedDrink, setAddedDrink] = useState(false);


  useEffect(() => {
    if (favorits.find((item) => item._id === id)) {
      setAddedDrink(true);
    }
  }, [favorits, id]);

  const handleOnClick = ({target}) => {
    if (addedDrink) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }

    setAddedDrink(!addedDrink);
    target.blur();
  };

  return  <DrinkHeroSection>

            <BoxWrapper>
              <PageTitle title={title} marginBottom='8px' />
              <SubTitle>{glass} / {alcoholic}</SubTitle>
              <ShortDescr>{description} </ShortDescr>
              <AddToFavoriteBtn text={addedDrink ? String.fromCharCode(10003) +' Added to favorites' : 'Add to favorite drinks'} onClick={handleOnClick}/>
            </BoxWrapper>
    
            <CoctailImg photo={image} />

          </DrinkHeroSection>

};
