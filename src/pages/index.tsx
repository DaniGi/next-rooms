import Head from 'next/head';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Rooms</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard />
    </>
  );
}
