'use client';
import { BsPlus } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';

export default function Sidebar() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {};

  return (
    <div className='flex h-screen flex-col space-y-1 bg-[#202123] py-2 md:min-w-[16rem]'>
      {/* new chat */}
      <button
        className='mx-2 flex items-center space-x-3 rounded-md border border-white/20 p-3 duration-200 ease-out hover:bg-gray-500/10'
        onClick={createNewChat}
      >
        <BsPlus className='text-base' />
        <span className='text-sm'>New Chat</span>
      </button>
      {/* chats */}
      <div className='flex-1 space-y-1 overflow-y-auto border-b border-white/20 px-2'></div>
      {/* clear conversation */}
      <button className='mx-2 flex items-center space-x-3 rounded-md p-3 duration-200 hover:bg-gray-500/10'>
        <FiTrash2 className='text-base' />
        <span className='text-sm' onClick={() => signOut()}>
          Clear Conversation
        </span>
      </button>
      {/* logout */}
      <button
        className='mx-2 flex items-center space-x-3 rounded-md p-3 duration-200 hover:bg-gray-500/10'
        onClick={() => signOut()}
      >
        <MdLogout className='text-base' />
        <span className='text-sm'>Log out</span>
      </button>
    </div>
  );
}
