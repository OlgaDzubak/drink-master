import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../../redux/drinks/favorites/favoritesOperations';
import { selectError, selectIsLoading} from '../../redux/drinks/favorites/favoriteSelectors';
import {
  DrinksListSet,
  CardWrap,
  ImgCard,
  TitleWrap,
  BtnWrap,
  Title,
  TitleType,
  TitleDescription,
  ButtonSeeMore,
  ButtonDel
} from './DrinksList.styled';
import NotFound from '../NotFound/NotFound';
import icon from '../../assets/images/favoritePage/trash.svg';

const DrinksListFavorites = ({ drinks }) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {!error && !isLoading && drinks.length === 0 && (
        <NotFound text={"You haven't added any favorites cocktails yet"} />
      )}

      <DrinksListSet>
        {drinks.length > 0 &&
          drinks.map(
            ({ _id, drink, alcoholic, shortDescription, drinkThumb }) => (

              <CardWrap key={_id}>

                <ImgCard src={drinkThumb} alt={drink}></ImgCard>

                <TitleWrap>
                  <Title>{drink}</Title>
                  <TitleType>{alcoholic}</TitleType>
                  <TitleDescription>{shortDescription}</TitleDescription>
                </TitleWrap>

                <BtnWrap>
                  
                  <Link to={`/drink/${_id}`}>
                    <ButtonSeeMore>See more</ButtonSeeMore>
                  </Link>

                  <ButtonDel
                    type="button"
                    onClick={() => dispatch(deleteFavorite(_id))}
                  >
                    <img src={icon} alt="trash" />
                  </ButtonDel>

                </BtnWrap>

              </CardWrap>

            ),
          )}
      </DrinksListSet>
    </>
  );
  
};

export default DrinksListFavorites;
