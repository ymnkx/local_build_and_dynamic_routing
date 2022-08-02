import { useRouter } from 'next/router';
import Layout from '../src/layouts/Layout';

const SampleItem = () => {
  const router = useRouter();
  const paths =
    typeof router.query.path === 'string'
      ? [router.query.path]
      : router.query.path;
  return (
    <Layout>
      <h1>Sample Item</h1>
      <h2>query.path:</h2>
      <ul>
        {paths?.map((path) => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default SampleItem;
