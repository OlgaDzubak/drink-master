import {  FooterStyledLink, MediaList, MediaListItem, 
          StyledFacebookSVG, StyledInstagramSVG, StyledYoutubeSVG } from './MediaLinksList.styled';

export const MediaLinksList = ({location}) => {
  
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return  <MediaList>

            <MediaListItem >
              <FooterStyledLink location={location} to="https://www.facebook.com/goITclub/" {...externalLinkProps} >
                <StyledFacebookSVG />
              </FooterStyledLink>
            </MediaListItem>

            <MediaListItem>
              <FooterStyledLink location={location} to="https://www.instagram.com/goitclub/" {...externalLinkProps} >
                <StyledInstagramSVG />
              </FooterStyledLink>
            </MediaListItem>

            <MediaListItem >
              <FooterStyledLink location={location} to="https://www.youtube.com/c/GoIT"  {...externalLinkProps} >
                <StyledYoutubeSVG />
              </FooterStyledLink>
            </MediaListItem>

          </MediaList>
};
