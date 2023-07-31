import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Card from '@/components/Card';
import BookList from '@/components/BookList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header title={'Books'} isProfileIconShow />
      <BookList />
    </main>
  );
}
