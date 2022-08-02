import Layout from '../src/layouts/Layout';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const SampleLinks = dynamic(() => import('../src/components/SampleLinks'), {
  ssr: false,
});

const Sample = () => {
  const getRandomLink = (n: number = 1) => {
    let path = '';
    while (n) {
      const num = Math.floor(Math.random() * 10000);
      path += `${num}`;
      if (n !== 1) path += '/';
      n--;
    }
    path = '/sample/' + path;
    return (
      <Link href={path} prefetch={false}>
        <a>{path}</a>
      </Link>
    );
  };

  return (
    <Layout>
      <h1>Sample Top</h1>
      <SampleLinks />
      <h2>MEMO</h2>
      <ul>
        <li>
          検証用のリンクをJSで動的に生成しているので、開発環境（SSR）でこのページを初めにアクセスするページ（エンドポイント）にした場合、ルーティングを解決できずにエラーになる。
        </li>
        <li>（ローカルでビルドした後なら問題なく動く）</li>
        <li>
          ランダムのリンクをcomponentにして、
          <a
            href="https://nextjs.org/docs/advanced-features/dynamic-import"
            target="_blank"
            rel="noreferrer"
          >
            dynamic import
          </a>
          でSSRを切る方法で解決。
        </li>
      </ul>
    </Layout>
  );
};

export default Sample;
