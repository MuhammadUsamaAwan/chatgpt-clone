'use client';
import { db } from '@/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Props {
  id?: string;
}

export default function ChatInput({ id }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const notificaton = toast.loading('ChatGPT is thinking...');
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt('');
    const message: Message = {
      text: input,
      createdAt: Timestamp.now(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image || `http://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    if (id) {
      await addDoc(collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'), message);
      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          chatId: id,
          model: 'text-davinci-003',
          session,
        }),
      }).then(() =>
        toast.success('ChatGPT has responded!', {
          id: notificaton,
        })
      );
      setIsLoading(false);
    } else {
      const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
        messages: [],
        userId: session?.user?.email!,
        createdAt: Timestamp.now(),
      });
      await addDoc(collection(db, 'users', session?.user?.email!, 'chats', doc.id, 'messages'), message);
      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          chatId: id,
          model: 'text-davinci-003',
          session,
        }),
      }).then(() =>
        toast.success('ChatGPT has responded!', {
          id: notificaton,
        })
      );
      setIsLoading(false);
      if (!id) router.push(`/chat/${doc.id}`);
    }
  };

  return (
    <form className='relative mx-4 mt-auto rounded-md bg-[#40414F] py-3 pl-4 shadow' onSubmit={sendMessage}>
      <input
        className='w-full resize-none bg-transparent focus:outline-none'
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        autoFocus
      />
      <button
        disabled={isLoading}
        className='absolute top-1/2 right-4 -translate-y-1/2 rounded-md p-1 text-lg hover:bg-gray-900'
      >
        <FiSend />
      </button>
    </form>
  );
}
