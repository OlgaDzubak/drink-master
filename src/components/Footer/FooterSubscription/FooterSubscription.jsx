import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { SubscribeForm } from './SubscribeForm';
import { UnsubscribeForm } from './UnsubscribeForm';


export const FooterSubscription = () => {

  const { email, verify } = useSelector(selectUser);

  return  <>
            {verify ? <UnsubscribeForm email={email} /> : <SubscribeForm email={email} />}
          </>
};