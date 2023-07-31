import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Book } from './types';
import { bookState } from '@/states/bookState';
import Image from 'next/image';

const Card: React.FC<Book> = (props) => {
  const router = useRouter();
  const [clickedBook, setClickedBook] = useRecoilState<Book | null>(bookState);

  return (
    <div
      className="border border-black w-[160px] cursor-pointer"
      onClick={() => {
        setClickedBook(props);
        router.push(`/${props.bookIndex}`);
      }}>
      <div>
        {/* <img className="h-48 w-[160px]" src={props?.coverImage} alt={props?.title} /> */}
        <Image
          className="h-48 w-[160px]"
          src={props?.coverImage || ''}
          width={158}
          height={192}
          alt={props?.title || ''}
        />
      </div>
      <div className="px-4 py-2">
        <div>
          <span className="font-medium text-sm">{props?.title}</span>
        </div>
        <div className="py-2 flex justify-between">
          <span className="text-error font-bold">{props?.discountRate}</span>
          <div>
            <span className="text-n11 font-bold text-base">{props?.price}</span>
            <span className="text-n10 font-medium text-sm">원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
