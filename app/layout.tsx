import './globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <main className='flex'>
          <Sidebar />
          <div className='flex-1 bg-[#343541]'>{children}</div>
        </main>
      </body>
    </html>
  );
}
