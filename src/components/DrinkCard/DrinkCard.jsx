import { useDispatch } from 'react-redux';
import { deleteOwn } from '../../redux/drinks/own/ownOperations';
import { deleteFavorite } from '../../redux/drinks/favorites/favoritesOperations';
import icon from '../../assets/images/favoritePage/trash.svg';
import {  DrinkItem, ImageCard, InformWrapper, DrinkTitle, AlcogolMarker, 
          DrinkDescription, WrapperBtn, LinkSeeMore, BucketBtn } from './DrinkCard.styled';
import defaultImg from '../../assets/images/drinkPageImg/coctailPlaceholder.png';

export const DrinkCard = ({ location='home', _id, drink='', alcoholic='', shortDescription='', drinkThumb={defaultImg} }) => {
   
  const dispatch = useDispatch();
  
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

  return  <DrinkItem key={_id}>
            
            <ImageCard src={drinkThumb} alt={drink}></ImageCard>

            <InformWrapper location={location}>

              <DrinkTitle location={location}>{drink}</DrinkTitle>
              
              <AlcogolMarker location={location}>{alcoholic}</AlcogolMarker>

              <DrinkDescription location={location}>{shortDescription}</DrinkDescription>
                
              <WrapperBtn>
                
                <LinkSeeMore location={location} to={`/drink/${_id}`} aria-label="click button to see more information about drink">See more</LinkSeeMore>

                <BucketBtn location={location} type="button" onClick={handleBucketBtnClick} aria-label={`click button to delete drink from ${location} drinks`}>
                  <img src={icon} alt="trash bucket icon" />
                </BucketBtn>

              </WrapperBtn>

            </InformWrapper>
            
          </DrinkItem>
  
};