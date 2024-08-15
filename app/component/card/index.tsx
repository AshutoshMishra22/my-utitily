import Image from 'next/image';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CURRENT_CURRENCY } from '@/constant';

export enum CardType {
  DEFAULT = '',
  SMALL_CARD = 'smallCard',
}

export type CardProps = {
  imgSrc: string;
  title: string;
  details?: string;
  rating?: string;
  reviewCount?: string;
  discount?: string;
  offerPrice?: string;
  price?: string;
  cardType?: CardType;
};

export default function CardComponent({
  imgSrc,
  title,
  details,
  rating,
  reviewCount,
  discount,
  offerPrice,
  price,
  cardType,
}: CardProps) {
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
        <div className='contentInfo'>{details}</div>
        <section className='contentDetails'>
          <span className='ratingDetails'>
            <span>{rating}</span>
            <FontAwesomeIcon icon={faStar} />
            <span>({reviewCount})</span>
          </span>
          <span className='discountDetails'>{discount}</span>
          <span className='priceDetails'>
            <p className='offerPrice'>
              {CURRENT_CURRENCY}
              {offerPrice}
            </p>
            <p className='actualPrice'>
              {CURRENT_CURRENCY}
              {price}
            </p>
          </span>
        </section>
      </article>
    </div>
  );
}
