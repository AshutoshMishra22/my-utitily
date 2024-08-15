import './tab.scss';

type Props = {
  tabList: Array<Record<string, string>>;
  activeTabKey: number;
};

export default function TabComponent({ tabList, activeTabKey }: Props) {
  return (
    <ul className='tabContainer'>
      {tabList.map((tab, index) => (
        <li className={`tabItem ${activeTabKey === index ? 'active' : ''}`}>
          {tab.name}
        </li>
      ))}
    </ul>
  );
}
