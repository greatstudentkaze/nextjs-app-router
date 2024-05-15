import { GetServerSideProps, NextPage } from 'next';
import { Aboba } from './aboba';

const TestPage: NextPage<{}> = (props) => {
  return (
    <div>
      test page
      <Aboba />
    </div>
  );
};

export default TestPage;
