import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useRecoilValue } from 'recoil';
import Header from '@/components/Header';
import { bookState } from '@/states/bookState';
import Carousel from '@/components/Carousel/Carousel';
import BookInfo from '@/components/BookInfo/BookInfo';

const BookDetail = () => {
  const BookInformation = useRecoilValue(bookState);

  return (
    <div>
      <Header title={BookInformation?.title} isNavigationEnable />
      <Carousel />
      <BookInfo />
    </div>
  );
};

export async function getServerSideProps({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const data = {
    BookDetails: req.url,
  };

  return { props: data };
}
export default BookDetail;
