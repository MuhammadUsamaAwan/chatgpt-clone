import { BsSun, BsExclamationTriangle } from 'react-icons/bs';
import { HiOutlineBolt } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-white'>
      <h1 className='mb-20 text-5xl font-bold'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        {/* examples */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BsSun className='h-8 w-8' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              &quot;Explain quantum computing in simple terms&quot; →
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              &quot;Got any creative ideas for a 10 year old&apos;s birthday?&quot; →
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              &quot;How do I make an HTTP request in Javascript?&quot; →
            </p>
          </div>
        </div>
        {/* Capabilities */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <HiOutlineBolt className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              Remembers what user said earlier in the conversation
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>Allows user to provide follow-up corrections</p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>Trained to decline inappropriate requests</p>
          </div>
        </div>
        {/* limitations */}
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BsExclamationTriangle className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              May occasionally generate incorrect information
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              May occasionally produce harmful instructions or biased content
            </p>
            <p className='max-w-[300px] rounded-lg bg-gray-700/50 p-4'>
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
