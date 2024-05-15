import { GetServerSideProps, NextPage } from 'next';

const TestPage: NextPage<{}> = (props) => {
    throw new Error('SERVER ERROR OCCURRED');

  return (
    <div>
      test page
    </div>
  );
};

export default TestPage;
