const nav_links: Array<Record<string, string>> = [
  { name: 'Dashboard', key: '1', link: '/dashboard' },
  { name: 'Login', key: '2', link: '/login' },
  { name: 'Sign Up', key: '3', link: '/sign-up' },
];

const HOMEPAGE_TAB_LIST = [
  { name: 'Home', key: '0' },
  { name: 'Discover', key: '1' },
  { name: 'Orders', key: '2' },
  { name: 'Cart', key: '3' },
];

const SEARCH_BAR_PLACEHOLDER = 'Search for resturant or dishes';

export { nav_links, HOMEPAGE_TAB_LIST, SEARCH_BAR_PLACEHOLDER };
