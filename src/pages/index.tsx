import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Login from 'src/components/Login';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import { useUser } from '../contexts/UserContext';

const queryClient = new QueryClient();

export default function Home() {
  const { userState } = useUser();
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Next Rooms</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>{userState.online ? <Dashboard /> : <Login />}</Layout>
    </QueryClientProvider>
  );
}
