import DashboardMain from './DashboardMain';

import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return ( 
    <>
      <Helmet>
        <title>Dashboard | charityhub.</title>
        <meta name="charityhub. Dashboard" content="charityhub. Dashboard Page"/>
        <link rel="canonical" href="/:email/dashboard"/>
      </Helmet>
      <DashboardMain />
    </>
   );
}
 
export default Dashboard;