import ChatInput from '@/components/ChatInput';
import ChatMessages from '@/components/ChatMessages';

interface Props {
  params: {
    id: string;
  };
}

export default function Chat({ params: { id } }: Props) {
  return (
    <div className='flex h-screen flex-col pb-5'>
      <ChatMessages id={id} />
      <ChatInput id={id} />
    </div>
  );
}
