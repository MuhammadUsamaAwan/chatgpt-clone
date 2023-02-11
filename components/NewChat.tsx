'use client';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const createNewChat = async () => {
    setIsLoading(true);
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      messages: [],
      userId: session?.user?.email!,
      createdAt: Timestamp.now(),
    });
    setIsLoading(false);
    router.push(`/chat/${doc.id}`);
  };

  return (
    <button
      className='mx-2 flex items-center space-x-3 rounded-md border border-white/20 p-3 duration-200 ease-out hover:bg-gray-500/10'
      onClick={createNewChat}
      disabled={isLoading}
    >
      <BsPlus className='text-base' />
      <span className='text-sm'>New Chat</span>
    </button>
  );
}
