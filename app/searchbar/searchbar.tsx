import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './searchbar.scss';
import { SEARCH_BAR_PLACEHOLDER } from '@/constant';
type Props = {};

// TODO - Debaounce

export default function SearchBarComponent({}: Props) {
  return (
    <section className='searchbarContainer'>
      <FontAwesomeIcon
        icon={faSearch}
        className='searchIcon'
      />
      <input
        type='text'
        placeholder={SEARCH_BAR_PLACEHOLDER}
        spellCheck='false'
      />
      <FontAwesomeIcon
        icon={faMicrophone}
        className='searchIcon'
      />
    </section>
  );
}
