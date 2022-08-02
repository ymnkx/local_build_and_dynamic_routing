import Head from 'next/head';
import { ReactNode } from 'react';
import CommonNavi from '../components/CommonNavi';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="title">Next.js</div>
        <CommonNavi />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
