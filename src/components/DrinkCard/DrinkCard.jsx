import { useDispatch } from 'react-redux';
import { deleteOwn } from '../../redux/drinks/own/ownOperations';
import { deleteFavorite } from '../../redux/drinks/favorites/favoritesOperations';
import icon from '../../assets/images/favoritePage/trash.svg';
import {  DrinkItem, ImageCard, InformWrapper, DrinkTitle, AlcogolMarker, 
          DrinkDescription, WrapperBtn, LinkSeeMore, BucketBtn } from './DrinkCard.styled';
import defaultImg from '../../assets/images/drinkPageImg/coctailPlaceholder.png';

export const DrinkCard = ({ location='home', _id, drink='', alcoholic='', shortDescription='', drinkThumb={defaultImg} }) => {
   
  const dispatch = useDispatch();
  const ariaLabel = drink.toLowerCase().split(" ").join("-").slice(0, 20);
  const handleBucketBtnClick = () => {
    
    switch (location) {
      case "own":
                  dispatch(deleteOwn(_id));
                  break;
      case "favorite":
                  dispatch(deleteFavorite(_id));
                  break;
      default: break;
    }

  }

    return <DrinkItem key={_id} aria-labelledby={ariaLabel}>
            
            <ImageCard src={drinkThumb} alt={drink}></ImageCard>

            <InformWrapper location={location}>

              <DrinkTitle id={ariaLabel} location={location}>{drink}</DrinkTitle>
              
              <AlcogolMarker location={location}>{alcoholic}</AlcogolMarker>

              <DrinkDescription location={location}>{shortDescription}</DrinkDescription>
                
              <WrapperBtn>
                
                <LinkSeeMore location={location} to={`/drink/${_id}`} aria-labelledby={ariaLabel}>See more</LinkSeeMore>

                <BucketBtn location={location} type="button" onClick={handleBucketBtnClick} aria-label='remove drink'>
                  <img src={icon} alt="trash bucket icon" />
                </BucketBtn>

              </WrapperBtn>

            </InformWrapper>
            
          </DrinkItem>
  
};