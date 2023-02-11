import './globals.css';
import Sidebar from '@/components/Sidebar';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import Login from '@/components/Login';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import ClientProvider from '@/components/ClientProvider';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <main className='flex bg-[#343541] text-white'>
              <Sidebar />
              <ClientProvider />
              <div className='flex-1'>{children}</div>
            </main>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
