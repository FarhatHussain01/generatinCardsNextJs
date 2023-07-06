import Wrapper from './Wrapper';
import Image from 'next/image';
import { FC } from 'react';
import starImg from "@/app/assests/images/star.png"

interface ItemProps {
  id: number;
  title: string;

  price: number;
  coverImg: string;
  stats :{
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
  rating: number;
  reviewCount: number;
}

const Card: FC<ItemProps> = ({
  id,
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
  rating,
  reviewCount,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <section className='relative'>
      <Wrapper>
        <div className=" w-[200px] gap-x-2 rounded bg-slate-300 mb-7 ">
        {badgeText && <div className="absolute top-[6px]  font-semibold bg-white w-[100px] py-2 px-2 rounded-md">{badgeText}</div>}
          {/* image */}
          <div>
            <Image src= {`/app/assests/images/${coverImg}`} className="w-full rounded" alt="nothing" width={200} height={250} />
          </div>
          <div className="flex flex-row gap-x-1 mt-2 text-xs items-center">
            <Image src={starImg} alt="star" className="h-[12px]" />
            <span>{rating}</span>
            <span>{reviewCount}</span>
            <span>{location}</span>
          </div>
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-sm">
              <span className="font-bold">From ${price}</span>/person
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Card;