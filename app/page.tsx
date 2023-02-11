import { BsSun, BsExclamationTriangle } from 'react-icons/bs';
import { HiOutlineBolt } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center text-white'>
      <h1 className='mb-20 text-4xl font-semibold'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        {/* examples */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BsSun className='mb-2 text-2xl' />
            <h2 className='text-lg'>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              &quot;Explain quantum computing in simple terms&quot; →
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              &quot;Got any creative ideas for a 10 year old&apos;s birthday?&quot; →
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              &quot;How do I make an HTTP request in Javascript?&quot; →
            </p>
          </div>
        </div>
        {/* Capabilities */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <HiOutlineBolt className='mb-2 text-2xl' />
            <h2 className='text-lg'>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              Remembers what user said earlier in the conversation
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>Allows user to provide follow-up corrections</p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>Trained to decline inappropriate requests</p>
          </div>
        </div>
        {/* limitations */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BsExclamationTriangle className='mb-2 text-2xl' />
            <h2 className='text-lg'>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              May occasionally generate incorrect information
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              May occasionally produce harmful instructions or biased content
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-3'>
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
