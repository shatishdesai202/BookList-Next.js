import React from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import axiosInstance from '../utils/api';
import Card from './Card';
import { ApiResponse, Book } from './types';

const fetchBooks = async (page = 1): Promise<ApiResponse> => {
  const { data } = await axiosInstance.get(`/?page=${page}`);
  return data;
};

const Home = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, error, refetch } = useInfiniteQuery<
    ApiResponse,
    Error
  >('books', ({ pageParam = 1 }) => fetchBooks(pageParam), {
    getNextPageParam: (lastPage, _pages) => {
      return lastPage.hasNext ? _pages.length + 1 : undefined;
    },
  });

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={data?.pages.reduce((total, page) => total + (page.data?.length || 0), 0) || 0}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more books to display</p>}
        scrollThreshold={0.8}
        pullDownToRefresh
        refreshFunction={handleRefresh}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
        releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}>
        <div className="grid grid-cols-4 grid-cols-1 sm:grid-cols-1 4k:grid-cols-12 laptopL:grid-cols-6 laptop:grid-cols-5 tablet:grid-cols-3 mobileM:grid-cols-3 mobileS:grid-cols-2 mobile:gap-0 gap-3">
          {data?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page?.data?.map((book: Book, bookIndex: number) => {
                return (
                  <Card
                    key={`${pageIndex}-${bookIndex}`}
                    title={book?.title}
                    description={book?.description}
                    discountRate={`${book?.discountRate}%`}
                    coverImage={book?.coverImage}
                    price={book?.price}
                    bookIndex={bookIndex}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
