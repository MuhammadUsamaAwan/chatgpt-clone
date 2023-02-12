'use client';
import { MdLogout } from 'react-icons/md';
import { signOut } from 'next-auth/react';
import NewChat from './NewChat';
import Chats from './Chats';
import ModelsSelect from './ModelsSelect';

export default function Sidebar() {
  return (
    <div className='flex h-screen flex-col space-y-1 bg-[#202123] py-2 md:w-[16rem]'>
      <NewChat />
      <Chats />
      <div className='mx-2 hidden sm:block'>
        <ModelsSelect />
      </div>
      <button
        className='mx-2 flex items-center space-x-3 rounded-md p-3 duration-200 hover:bg-gray-500/10'
        onClick={() => signOut()}
      >
        <MdLogout className='text-base' />
        <span className='hidden text-sm sm:inline-block'>Log out</span>
      </button>
    </div>
  );
}
