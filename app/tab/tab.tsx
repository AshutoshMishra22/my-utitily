import './tab.scss';

type Props = {};

export default function TabComponent({}: Props) {
  return (
    <ul className='tabContainer'>
      <li className='tabItem active'>HOME</li>
      <li className='tabItem'>HOME</li>
      <li className='tabItem'>HOME</li>
    </ul>
  );
}
