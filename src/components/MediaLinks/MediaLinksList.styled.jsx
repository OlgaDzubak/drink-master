import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookIMG } from '../../assets/images/link_icons/facebook.svg';
import { ReactComponent as InstagramIMG } from '../../assets/images/link_icons/instagram.svg';
import { ReactComponent as YouTubeIMG } from '../../assets/images/link_icons/youtube.svg';

export const MediaList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  @media screen and (min-width: 767.8px){
    margin-top: 40px;
  }
`;

export const MediaListItem = styled.li`
`;

export const FooterStyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  transition: var(--transition);
  border: solid 1px ${(props) => {  if (props.location === "footer") return props.theme.footerLinkBorderColor;
                                    return props.theme.navBorderColor;}
                     };
  fill: ${(props) => { if (props.location === "footer") return props.theme.footerLinkTextColor;
                        return props.theme.navTextColor;}
         };
  
  &:hover, &:focus {
    transform: scale(1.1);
    border: solid 1px ${(props) => {  if (props.location === "footer") return props.theme.footerLinkBorderColor;
                                      return props.theme.navBorderColor}
                       };
    fill: ${(props) => { if (props.location === "footer") return props.theme.footerLinkTextColorHover;
                            return props.theme.navTextColor}
            };  
  }
`;

export const StyledFacebookSVG = styled(FacebookIMG)`
  height: 24px;
  width: 24px;
`;

export const StyledInstagramSVG = styled(InstagramIMG)`
  height: 24px;
  width: 24px;
`;

export const StyledYoutubeSVG = styled(YouTubeIMG)`
  height: 24px;
  width: 24px;
`;
