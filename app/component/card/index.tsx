import Image from 'next/image';
import './card.scss';
type CardType = {
  DEFAULT: '';
  SMALL_CARD: 'smallCard';
};
type Props = {
  imgSrc: string;
  title: string;
  details?: string;
  cardType?: CardType;
};

export default function CardComponent({
  imgSrc,
  title,
  details,
  cardType,
}: Props) {
  return (
    <div
      role='contentinfo'
      className={`cardContainer ${cardType}`}
    >
      <Image
        src={imgSrc}
        alt='card-image'
      />
      <article>
        <div className='contentTitle'>{title}</div>
        <div className='contentDetails'>{details}</div>
      </article>
    </div>
  );
}
