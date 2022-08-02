import Link from 'next/link';

const SampleLinks = () => {
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
      <Link href={path}>
        <a>{path}</a>
      </Link>
    );
  };
  return (
    <ul>
      <li>{getRandomLink(1)}</li>
      <li>{getRandomLink(2)}</li>
      <li>{getRandomLink(3)}</li>
    </ul>
  );
};

export default SampleLinks;
