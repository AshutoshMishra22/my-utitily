import vegie from '@/public/vegies.svg';
import pizzaHut from '@/public/pizzaHut.svg';

const nav_links: Array<Record<string, string>> = [
  { name: 'Dashboard', key: '1', link: '/dashboard' },
  { name: 'Login', key: '2', link: '/login' },
  { name: 'Sign Up', key: '3', link: '/sign-up' },
];

const HOMEPAGE_TAB_LIST: Array<Record<string, string>> = [
  { name: 'Home', key: '0' },
  { name: 'Discover', key: '1' },
  { name: 'Orders', key: '2' },
  { name: 'Cart', key: '3' },
];
const OFFER_LIST: Array<Record<string, string>> = [
  { imgSrc: vegie, title: '50% off', details: 'Enjoy 50% off on every order.' },
  {
    imgSrc: pizzaHut,
    title: 'Pizza Hut',
    details: 'Delicious pizzas',
  },
  { imgSrc: vegie, title: '50% off', details: 'Enjoy 50% off on every order.' },
  { imgSrc: vegie, title: '50% off', details: 'Enjoy 50% off on every order.' },
];

const FILTER_CHIP_LIST: Array<Record<string, string>> = [
  { name: 'all', key: '0', icon: 'utensils' },
  { name: 'chinese', key: '1' },
  { name: 'indian', key: '2' },
  { name: 'italian', key: '3' },
  { name: 'mexican', key: '4' },
];
const SEARCH_BAR_PLACEHOLDER = 'Search for resturant or dishes';
const HOMEPAGE_TRENDING_HEADING = 'Popular Near You';
export {
  nav_links,
  HOMEPAGE_TAB_LIST,
  SEARCH_BAR_PLACEHOLDER,
  FILTER_CHIP_LIST,
  OFFER_LIST,
  HOMEPAGE_TRENDING_HEADING,
};
