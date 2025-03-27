import { useDispatch } from 'react-redux';
import { deleteOwn } from '../../redux/drinks/own/ownOperations';
import icon from '../../assets/images/favoritePage/trash.svg';
import {  DrinkItem, ImageCard, InformWrapper, DrinkTitle, AlcogolMarker, 
          DrinkDescription, WrapperBtn, LinkSeeMore, BucketBtn } from './DrinkCard.styled';

export const DrinkCard = ({ location='home', _id, drink='', alcoholic='', shortDescription='', drinkThumb='' }) => {
   
  const dispatch = useDispatch();
  
  return  <DrinkItem key={_id}>
            
            <ImageCard src={drinkThumb} alt={drink}></ImageCard>

            <InformWrapper location={location}>

              <DrinkTitle location={location}>{drink}</DrinkTitle>
              
              <AlcogolMarker location={location}>{alcoholic}</AlcogolMarker>

              <DrinkDescription location={location}>{shortDescription}</DrinkDescription>
                
              <WrapperBtn>
                
                <LinkSeeMore location={location} to={`/drink/${_id}`}>See more</LinkSeeMore>

                <BucketBtn location={location} type="button" onClick={() => dispatch(deleteOwn(_id))}>
                  <img src={icon} alt="trash bucket icon" />
                </BucketBtn>

              </WrapperBtn>

            </InformWrapper>
            
          </DrinkItem>
  
};
