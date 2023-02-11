'use client';
import Link from 'next/link';
import { MdChatBubbleOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface Props {
  id: string;
}

export default function Chat({ id }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={`/chat/${id}`}
      className={`${
        pathname === `/chat/${id}` ? 'bg-[#343541]' : 'hover:bg-gray-500/10'
      } flex w-full items-center space-x-3 rounded-md p-3 duration-200`}
    >
      <MdChatBubbleOutline className='text-base' />
      <span className='flex-1 truncate text-sm'>New Chat</span>
      {pathname === `/chat/${id}` && (
        <span className='space-x-1.5'>
          <button className='text-base'>
            <AiOutlineEdit />
          </button>
          <button className='text-base'>
            <FiTrash2 />
          </button>
        </span>
      )}
    </Link>
  );
}
