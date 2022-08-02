import Link from 'next/link';

const CommonNavi = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="sample">
            <a>Sample</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CommonNavi;
