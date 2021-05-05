import { useState } from 'react';
import Head from 'next/head';
import Login from 'src/components/Login';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [isLogged] = useState(false);
  return (
    <>
      <Head>
        <title>Next Rooms</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>{isLogged ? <Dashboard /> : <Login />}</Layout>
    </>
  );
}
