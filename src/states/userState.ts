import { UserProps } from '@/components/types';
import { atom } from 'recoil';

export const userState = atom<UserProps | null>({
  key: 'userState',
  default: {
    profilePicture: '/profile_pic.png',
  },
});
