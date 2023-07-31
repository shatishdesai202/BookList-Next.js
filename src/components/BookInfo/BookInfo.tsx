import React from 'react';
import { useRecoilValue } from 'recoil';
import { bookState } from '@/states/bookState';
import Comments from '../Comments/Comments';
import AddComment from '../AddComment';

const BookInfo = () => {
  const BookDetail = useRecoilValue(bookState);

  return (
    <div>
      <div className="mt-6 border-b-2 border-n1">
        <div>
          <span className="text-base font-bold">{BookDetail?.title}</span>
        </div>
        <div>
          <span className="font-normal text-xs">
            Description of the book... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
        <div className="flex justify-between my-4">
          <span className="text-error text-sm font-bold">{BookDetail?.discountRate}</span>
          <span className="font-bold text-sm">{BookDetail?.price} 원</span>
        </div>
      </div>
      <div className="mt-2 border-b-2 border-n1 pb-4">
        <Comments
          isFirstComment
          profileAvatar={'profile1.png'}
          isGreenTick
          userName={'안녕 나 응애 '}
          userType={'1일전'}
          commentDesc={`어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
          우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
          아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
          괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
          꼭 봐주세용~!`}
          isLikeShow
          isCommentsCountShow
        />
        <Comments
          profileAvatar={'profile2.png'}
          userName={'ㅇㅅㅇ'}
          userType={'1일전'}
          commentDesc={`오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다`}
          isLikeShow
        />
      </div>
      <div className="mt-2">
        <AddComment />
      </div>
    </div>
  );
};

export default BookInfo;
