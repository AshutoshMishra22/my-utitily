import CardComponent, { CardType } from '../card';
import './cardList.scss';

type Props = { list: Array<Record<string, string>>; cardType?: CardType };

export default function CardListComponent({ list, cardType }: Props) {
  return (
    <section className='cardListContainer'>
      <div className='cardListOverlay'>
        {list.map(({ imgSrc, title, ...restProps }) => (
          <CardComponent
            imgSrc={imgSrc}
            title={title}
            cardType={cardType}
            {...restProps}
          />
        ))}
      </div>
    </section>
  );
}
