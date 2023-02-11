import ChatInput from '@/components/ChatInput';

interface Props {
  params: {
    id: string;
  };
}

export default function Chat({ params: { id } }: Props) {
  return (
    <div className='flex h-screen flex-col pb-5'>
      <ChatInput id={id} />
    </div>
  );
}
