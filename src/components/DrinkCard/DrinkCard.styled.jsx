import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DrinkItem  = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;

export const ImageCard = styled.img`
  width: 335px;  
  border-radius: 8px;

  @media (max-width: 350px) {
    width: 100%;
    min-width: 290px;
  }

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;

export const InformWrapper = styled.div`
  display: flex;
  margin-top: 14px;
  ${(props)=> (props.location === "home" || props.location === "drinks") 
            ? ` flex-direction: row;
                align-items: center;
                justify-content: space-between;`
            : ` flex-direction: column;
                align-items: flex-start;
                justify-content: center;`
   }
`;

export const DrinkTitle = styled.p`
  font-weight: 500; 
  word-wrap: break-word; 
  ${(props)=> (props.location === "home" || props.location === "drinks") 
                        ? ` font-size: 16px; 
                            line-height: 1.125; 
                            color: ${props.theme.mainTextColor};
                            transition: color var(--transition);
                            @media (min-width: 768px) {
                              font-size: 18px; 
                              line-height: 1.33;
                            }`

                        : ` font-size: 18px; 
                            line-height: 1.33; 
                            margin-bottom: 4px; 
                            color: ${props.theme.mainTextColor};
                            transition: color var(--transition);
                            @media (min-width: 768px) {
                              font-size: 24px; 
                            }`
   }
  
`;

export const AlcogolMarker = styled.p`
  ${(props)=> (props.location === "home" || props.location === "drinks") 
          ? ` display: none;`
          : ` font-size: 14px;
              line-height: 1.28;
              margin-bottom: 18px;
              color: ${props.theme.seeMoreBtnTextColor};
              transition: color var(--transition);`
   }
`;

export const DrinkDescription = styled.p`
  ${(props)=> (props.location === "home" || props.location === "drinks") 
        ? ` display: none;`
        : ` height: 96px; 
            font-size: 14px; 
            line-height: 1.28; 
            margin-bottom: 18px;
            color: ${props.theme.mainTextColor};
            transition: color var(--transition);`
   }
`;

export const WrapperBtn = styled.div`
   display: flex;
   gap: 8px;
`;

export const LinkSeeMore = styled(Link)`
  ${(props)=> props.location === "home" || props.location === "drinks"

      ? ` font-size: 14px; 
          font-weight: 500; 
          line-height: 1.28; 
          word-wrap: break-word; 
          align-self: flex-start;
          color: ${props.theme.seeMoreBtnTextColor};
          transition: color var(--transition);
          
          &:hover {
            color: ${props.theme.mainTextColor};
          }

          @media (min-width: 678px) { 
            font-size: 16px; 
            line-height: 1.125;
          }`

      : ` display: flex; 
          padding: 14px 40px; 
          align-items: flex-start; 
          gap: 10px; 
          font-weight: 600; 
          font-size: 14px; 
          line-height: 1.28;
          border: none; 
          outline: none; 
          border-radius: 42px;
          background-color: ${props.theme.navBackgroundColorHover};
          color: ${props.theme.navTextColorHover};
          transition: color var(--transition), background-color var(--transition);

          &:hover, &:focus { 
            background-color: ${props.theme.paginationLabelsHover}; 
            color: ${props.theme.themeSwitcherColor};
          }`
    }
  `;

export const BucketBtn = styled.button`
  ${(props) => props.location === "home" || props.location === "drinks"
                  ? `display: none;`
                  : ` width: 46px; 
                      padding: 11px 32px;
                      display: flex; 
                      justify-content: center; 
                      align-items: center;
                      gap: 10px; 
                      border: none; 
                      outline: none; 
                      border-radius: 40px;
                      background-color: ${props.theme.navBackgroundColorHover};
                      transition: transform var(--transition), background-color var(--transition);

                      &:hover, &:focus {
                        background-color: ${props.theme.trashBucketBackgroundHover};
                      }`
   }
`;
