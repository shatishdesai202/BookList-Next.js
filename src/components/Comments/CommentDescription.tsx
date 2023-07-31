import React from 'react';
import { CommentDescriptionProps } from '../types';
import Image from 'next/image';

const CommentDescription: React.FC<CommentDescriptionProps> = (props) => {
  return (
    <div className="ml-14">
      <span className="text-n9 text-xs font-normal leading-3 tracking-tight">{props?.commentDesc}</span>
      <div className="flex">
        {props?.isLikeShow && (
          <span className="flex items-center">
            <Image src="/images/heart.png" width={32} height={32} alt="Like Icon" />
            <span className="text-n5 text-xs">5</span>
          </span>
        )}
        {props?.isCommentsCountShow && (
          <span className="flex items-center">
            <Image src="/images/commentIcon.svg" width={32} height={32} alt="Like Icon" />
            <span className="text-n5 text-xs">5</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentDescription;
