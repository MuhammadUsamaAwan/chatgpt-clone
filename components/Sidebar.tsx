import { BsPlus } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div className='flex h-screen flex-col overflow-y-auto bg-[#202123] p-2 md:min-w-[16rem]'>
      <div className='flex-1'>
        <button className='flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 duration-200 ease-out hover:bg-gray-700/70'>
          <BsPlus className='text-xl text-white' /> <span>New Chat</span>
        </button>
      </div>
    </div>
  );
}
