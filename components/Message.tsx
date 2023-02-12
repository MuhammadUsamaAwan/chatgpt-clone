/* eslint-disable @next/next/no-img-element */
import { type DocumentData } from 'firebase/firestore';

interface Props {
  message: DocumentData;
}

export default function Message({ message }: Props) {
  return (
    <div className={`${message.user.name === 'ChatGPT' && 'bg-[#434654]'} py-5 `}>
      <div className='mx-auto flex max-w-2xl space-x-5 px-10'>
        <img src={message.user.avatar || '/chatgpt-logo.png'} alt='' className='h-8 w-8 rounded-sm' />
        <p className='pt-1 text-sm'>{message.text}</p>
      </div>
    </div>
  );
}
