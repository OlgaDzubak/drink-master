import { MediaLinksList } from '../../MediaLinks/MediaLinksList';
import { FollowUsWrapper, FollowUsTitle, } from './FollowUs.styled';

export const FollowUs = () => {

  return  <FollowUsWrapper aria-labelledby="follow-us-title">

            <FollowUsTitle id="follow-us-title">Follow Us</FollowUsTitle>
            <MediaLinksList/>

          </FollowUsWrapper>

};
