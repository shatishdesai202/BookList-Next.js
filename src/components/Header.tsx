import React from 'react';
import { HeaderProps } from './types';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/userState';
import Image from 'next/image';
import Arrow from '@/assets/Arrow';
import { useRouter } from 'next/router';

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const userDetail = useRecoilValue(userState);
  return (
    <div className="flex items-center">
      {props?.isNavigationEnable && (
        <div onClick={() => router.push('/')}>
          <Arrow />
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        <span className="text-lg text-n10 text-lg font-bold">{props?.title}</span>
      </div>
      <span className="bg-n2 rounded-full justify-between my-2 h-8">
        {props?.isProfileIconShow && (
          <Image
            className="rounded-full"
            src={`/images${userDetail?.profilePicture}`}
            width={32}
            height={32}
            alt="user_avatar"
          />
        )}
      </span>
    </div>
  );
};

export default Header;
