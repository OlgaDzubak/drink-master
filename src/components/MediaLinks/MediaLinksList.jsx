import {  FooterStyledLink, MediaList, MediaListItem, 
          StyledFacebookSVG, StyledInstagramSVG, StyledYoutubeSVG } from './MediaLinksList.styled';

export const MediaLinksList = ({location}) => {
  
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return  <MediaList aria-labelledby="follow-us-title">

            <MediaListItem >
              <FooterStyledLink location={location} to="https://www.facebook.com/goITclub/" {...externalLinkProps} aria-label="facebook">
                <StyledFacebookSVG />
              </FooterStyledLink>
            </MediaListItem>

            <MediaListItem>
              <FooterStyledLink location={location} to="https://www.instagram.com/goitclub/" {...externalLinkProps} aria-label="instagram">
                <StyledInstagramSVG />
              </FooterStyledLink>
            </MediaListItem>

            <MediaListItem >
              <FooterStyledLink location={location} to="https://www.youtube.com/c/GoIT"  {...externalLinkProps} aria-label="youtube">
                <StyledYoutubeSVG />
              </FooterStyledLink>
            </MediaListItem>

          </MediaList>
};
