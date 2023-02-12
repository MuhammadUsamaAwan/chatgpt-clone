import Link from 'next/link';
import { BsPlus } from 'react-icons/bs';

export default function NewChat() {
  return (
    <Link
      href='/'
      className='mx-2 flex items-center space-x-3 rounded-md border border-white/20 p-3 duration-200 ease-out hover:bg-gray-500/10'
    >
      <BsPlus className='text-base' />
      <span className='hidden text-sm sm:inline-block'>New Chat</span>
    </Link>
  );
}
