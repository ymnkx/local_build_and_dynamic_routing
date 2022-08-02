import { useParams } from 'react-router-dom';

const SampleItem = () => {
  const { sampleId, detail, type } = useParams();

  return (
    <div>
      <h1>Sample Item</h1>
      <h2>query.path:</h2>
      <ul>
        {sampleId ? <li>{sampleId}</li> : undefined}
        {detail ? <li>{detail}</li> : undefined}
        {type ? <li>{type}</li> : undefined}
      </ul>
    </div>
  );
};

export default SampleItem;
