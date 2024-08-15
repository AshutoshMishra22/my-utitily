import SearchBarComponent from './searchbar/searchbar';
import TabComponent from './tab/tab';

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <SearchBarComponent />
      {/* Tabs */}
      <TabComponent />
      {/* Offers */}
    </>
  );
}
