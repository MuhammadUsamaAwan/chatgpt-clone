'use client';
import Link from 'next/link';
import { MdChatBubbleOutline } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { deleteDoc, doc, limit, collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSession } from 'next-auth/react';
import { db } from '@/firebase';

interface Props {
  id: string;
}

export default function Chat({ id }: Props) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [data] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats', id, 'messages'),
        orderBy('createdAt', 'asc'),
        limit(1)
      )
  );

  const deleteChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
  };

  console.log(data);

  return (
    <Link
      href={`/chat/${id}`}
      className={`${
        pathname === `/chat/${id}` ? 'bg-[#343541]' : 'hover:bg-gray-500/10'
      } flex w-full items-center space-x-3 rounded-md p-3 duration-200`}
    >
      <MdChatBubbleOutline className='text-base' />

      <span className='flex-1 truncate text-sm'>{data?.docs.at(0)?.data().text || 'New Chat'}</span>
      {pathname === `/chat/${id}` && (
        <button className='text-base' onClick={deleteChat}>
          <FiTrash2 />
        </button>
      )}
    </Link>
  );
}
