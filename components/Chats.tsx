'use client';
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ImSpinner7 } from 'react-icons/im';
import Chat from './Chat';

export default function Chats() {
  const { data: session } = useSession();
  const [data, loading] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'desc'))
  );

  if (loading)
    return (
      <div className='flex flex-1 items-center justify-center border-b border-white/20 py-1 px-2'>
        <ImSpinner7 className='animate-spin' />
      </div>
    );

  return (
    <div className='flex-1 space-y-2 overflow-y-auto border-b border-white/20 py-1 px-2'>
      {data?.docs?.map(chat => (
        <Chat id={chat.id} key={chat.id} />
      ))}
    </div>
  );
}
