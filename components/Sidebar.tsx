'use client';
import { BsPlus } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { signOut } from 'next-auth/react';

export default function Sidebar() {
  return (
    <div className='flex h-screen flex-col space-y-1 overflow-y-auto bg-[#202123] p-2 md:min-w-[16rem]'>
      {/* new chat */}
      <div className='flex-1 border-b border-white/20'>
        <button className='flex w-full items-center space-x-3 rounded-md border border-white/20 p-3 duration-200 ease-out hover:bg-gray-500/10'>
          <BsPlus className='text-base' />
          <span className='text-sm'>New Chat</span>
        </button>
      </div>
      {/* clear conversation */}
      <button className='flex items-center space-x-3 rounded-md p-3 duration-200 hover:bg-gray-500/10'>
        <FiTrash2 className='text-base' />
        <span className='text-sm' onClick={() => signOut()}>
          Clear Conversation
        </span>
      </button>
      {/* logout */}
      <button
        className='flex items-center space-x-3 rounded-md p-3 duration-200 hover:bg-gray-500/10'
        onClick={() => signOut()}
      >
        <MdLogout className='text-base' />
        <span className='text-sm'>Log out</span>
      </button>
    </div>
  );
}
