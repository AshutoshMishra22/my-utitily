import {
  faCartShopping,
  faHome,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AppNavigator.scss';

export default function AppNavigator() {
  return (
    <section className='appNavigatorContainer'>
      <FontAwesomeIcon
        icon={faHome}
        className='active'
      />
      <FontAwesomeIcon icon={faTag} />
      <FontAwesomeIcon icon={faCartShopping} />
      <FontAwesomeIcon icon={faUser} />
    </section>
  );
}
