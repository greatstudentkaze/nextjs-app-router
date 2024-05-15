import { GetServerSideProps, NextPage } from 'next';
import { Aboba } from './aboba';
// import { getTrips } from 'src/connections/trips';
// import { AB_ROUTES } from 'src/modules/ab/constants';
// import { handleAbData } from 'src/modules/ab/helpers';
// import { ARCHIVE_TRIPS_FILTER, CURRENT_TRIPS_FILTER } from 'src/types/trips';
//
// const getServerSideProps: GetServerSideProps = async (context) => {
//   const [initialTripsCurrent, initialTripsArchive, abData] = await Promise.all([
//     getTrips({ types: CURRENT_TRIPS_FILTER, cookies: context.req.headers.cookie, handleUnauthError: true }),
//     getTrips({ types: ARCHIVE_TRIPS_FILTER, cookies: context.req.headers.cookie }),
//     handleAbData(context, AB_ROUTES.Trips),
//   ]);
//
//   if (initialTripsCurrent === undefined) return { props: { unauthFlag: true, abData } };
//   return { props: { initialTrips: { current: initialTripsCurrent, archive: initialTripsArchive }, abData } };
// };

const TestPage: NextPage<{}> = (props) => {
  return (
    <div>
      test page
      <Aboba />
    </div>
  );
};

export default TestPage;
