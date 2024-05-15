import {GetServerSideProps, NextPage} from 'next';

const TestPage: NextPage<{ searchParams: { aaa: string } }> = ({searchParams}) => {

    if (searchParams.aaa === '123') {
        throw new Error('SERVER ERROR OCCURRED');
    }

    return (
        <div>
            test page
        </div>
    );
};

export default TestPage;
