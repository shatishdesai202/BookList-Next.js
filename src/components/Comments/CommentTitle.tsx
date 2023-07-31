import React from 'react';
import GreenTick from '@/assets/GreenTick';
import More from '@/assets/More';
import { CommentTitleProps } from '../types';
import Image from 'next/image';

const CommentTitle: React.FC<CommentTitleProps> = (props) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Image
          className="rounded-full"
          src={`/images/${props?.profileAvatar}`}
          width={32}
          height={32}
          alt="user_avatar"
        />
        <div className="flex items-center ml-2">
          <span className="text-n10 font-bold">{props.userName || '안녕 나 응애'}</span>
          {props?.isGreenTick && <GreenTick />}
          <span className="text-n5">{props?.userType || '1일전'}</span>
        </div>
      </div>
      <div>
        <More />
      </div>
    </div>
  );
};

export default CommentTitle;
