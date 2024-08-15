import CardComponent from '../card';
import './cardList.scss';

type Props = { list: Array<Record<string, string>> };

export default function CardListComponent({ list }: Props) {
  return (
    <section className='cardListContainer'>
      <div className='cardListOverlay'>
        {list.map(({ imgSrc, title, details }) => (
          <CardComponent
            imgSrc={imgSrc}
            title={title}
            details={details}
          />
        ))}
      </div>
    </section>
  );
}
