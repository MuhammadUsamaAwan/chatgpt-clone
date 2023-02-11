'use client';
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ImSpinner7 } from 'react-icons/im';
import Message from './Message';

interface Props {
  id: string;
}

export default function ChatMessages({ id }: Props) {
  const { data: session } = useSession();

  const [data, isLoading] = useCollection(
    session &&
      query(collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'), orderBy('createdAt', 'asc'))
  );

  if (isLoading)
    return (
      <div className='flex flex-1 items-center justify-center border-b border-white/20 py-1 px-2'>
        <ImSpinner7 className='animate-spin' />
      </div>
    );

  console.log(data);

  return (
    <div className='flex-1 overflow-y-auto'>
      {data?.docs.map(message => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}
