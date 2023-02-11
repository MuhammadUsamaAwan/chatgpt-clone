'use client';
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';

interface Props {
  id: string;
}

export default function ChatInput({ id }: Props) {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState('');

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt('');
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image || `http://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(collection(db, session?.user?.email!, 'chats', id, 'messages'), message);

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
    });
  };

  return (
    <form className='relative mx-4 mt-auto rounded-md bg-[#40414F] py-3 pl-4 shadow' onSubmit={sendMessage}>
      <textarea
        rows={1}
        className='w-full resize-none bg-transparent focus:outline-none'
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      ></textarea>
      <button className='absolute top-1/2 right-4 -translate-y-1/2 rounded-md p-1 text-lg hover:bg-gray-900'>
        <FiSend />
      </button>
    </form>
  );
}
