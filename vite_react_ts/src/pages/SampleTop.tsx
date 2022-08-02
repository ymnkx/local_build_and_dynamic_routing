import { Link } from 'react-router-dom';

const SampleTop = () => {
  const getRandomLink = (n: number = 1) => {
    let path = '';
    while (n) {
      const num = Math.floor(Math.random() * 10000);
      path += `${num}`;
      if (n !== 1) path += '/';
      n--;
    }
    return <Link to={path}>/sample/{path}</Link>;
  };

  return (
    <div>
      <h1>Sample Top</h1>
      <ul>
        <li>{getRandomLink(1)}</li>
        <li>{getRandomLink(2)}</li>
        <li>{getRandomLink(3)}</li>
      </ul>
    </div>
  );
};

export default SampleTop;
