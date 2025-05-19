import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { SubscribeForm } from './SubscribeForm';
import { UnsubscribeForm } from './UnsubscribeForm';


export const FooterSubscription = () => {

  const { subscribeStatus } = useSelector(selectUser);

  return  <>
            {subscribeStatus ? <UnsubscribeForm/> : <SubscribeForm/>}
          </>
};