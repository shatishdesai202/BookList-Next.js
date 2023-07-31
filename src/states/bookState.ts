import { Book } from '@/components/types';
import { atom } from 'recoil';

export const bookState = atom<Book | null>({
  key: 'bookState',
  default: null,
});
