import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Head from 'next/head';
import Login from 'src/components/Login';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

export interface User {
  username: string;
  online: boolean;
  friends: string[];
  rooms: string[];
}

const queryClient = new QueryClient();

export default function Home() {
  const [user, setUser] = useState<User>({
    username: '',
    online: false,
    friends: [],
    rooms: [],
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Next Rooms</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>{user.online ? <Dashboard /> : <Login setUser={setUser} />}</Layout>
    </QueryClientProvider>
  );
}
