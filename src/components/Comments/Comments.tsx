import React from 'react';
import CommentTitle from './CommentTitle';
import CommentDescription from './CommentDescription';
import { Comments } from '../types';

const Comments: React.FC<Comments> = (props) => {
  return (
    <div className={!props?.isFirstComment ? 'ml-14 mt-4' : ''}>
      <CommentTitle
        isGreenTick={props?.isGreenTick}
        profileAvatar={props?.profileAvatar}
        userName={props?.userName}
        userType={props?.userType}
      />
      <CommentDescription
        isLikeShow={props?.isLikeShow}
        isCommentsCountShow={props?.isCommentsCountShow}
        commentDesc={props?.commentDesc}
      />
    </div>
  );
};

export default Comments;
