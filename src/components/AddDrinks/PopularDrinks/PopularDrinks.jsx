import { useEffect, useState } from 'react';
import { getPopularCoctails } from '../../../helpers/API/operationsDrinks';
import { Link } from 'react-router-dom';
import defaultImg from '../../../assets/images/drinkPageImg/coctailPlaceholder.png';
import { PopularWrapper, PopularCoctailsTitle, PopularCoctailsWrapper, PopularCoctailsImage,
         PopularCoctailsText, PopularCoctailsName, PopularCoctailsDescription } from './PopularDrinks.styled';


export const PopularDrinks = () => {

  const [popularCoctails, setPopularCoctails] = useState([]);

  useEffect(() => {
    const fetchPopularCoctails = async () => {
      try {
        const data = await getPopularCoctails();
        setPopularCoctails(data);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchPopularCoctails();
  }, []);

  return  <div aria-labelledby="popular-drinks-title">
            <PopularCoctailsTitle id="popular-drinks-title">Popular Drinks</PopularCoctailsTitle>
            
            <PopularWrapper >
              {' '}
              {
                popularCoctails
                    .slice(0, 4)
                    .map(({ drinkThumb={defaultImg}, drink, description, _id }, index) => 
                              <Link key={index} to={`/drink/${_id}`} aria-labelledby="popular-drink-name">

                                <PopularCoctailsWrapper>

                                  <PopularCoctailsImage src={drinkThumb} alt={drink} aria-labelledby="popular-drink-name"/>

                                  <PopularCoctailsText>

                                    <PopularCoctailsName id="popular-drink-name">{drink}</PopularCoctailsName>
                                    
                                    <PopularCoctailsDescription aria-labelledby="popular-drink-name">
                                      {description}
                                    </PopularCoctailsDescription>

                                  </PopularCoctailsText>

                                </PopularCoctailsWrapper>
                                
                              </Link>
                    )
                }
            </PopularWrapper>
          </div>
};