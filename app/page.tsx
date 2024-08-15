import {
  FILTER_CHIP_LIST,
  HOMEPAGE_TAB_LIST,
  HOMEPAGE_TRENDING_HEADING,
  OFFER_LIST,
} from '@/constant';
import SearchBarComponent from './component/searchbar';
import TabComponent from './component/tab';
import CardListComponent from './component/cardList';
import ChipListComponent from './component/chipList';
import './page.scss';

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <SearchBarComponent />
      {/* Tabs */}
      <TabComponent
        tabList={HOMEPAGE_TAB_LIST}
        activeTabKey={0}
      />
      {/* Offers and new updates */}
      <CardListComponent list={OFFER_LIST} />
      {/* filter chips */}
      <ChipListComponent chipList={FILTER_CHIP_LIST} />
      {/* Popular Suggestion */}
      <section className='primaryTrendingHeading'>
        {HOMEPAGE_TRENDING_HEADING}
      </section>
      <CardListComponent list={OFFER_LIST} />
    </>
  );
}
