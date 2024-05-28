import MainDetail from './MainDetail';

import { Helmet } from 'react-helmet-async';

const CharityDetail = () => {
  return ( 
    <>
      <Helmet>
        <title>Detail | charityhub.</title>
        <meta name="charityhub. Charity Detail" content="charityhub. Charity Detail Page"/>
        <link rel="canonical" href="/charities/:charityId"/>
      </Helmet>
      <MainDetail />
    </>
   );
}
 
export default CharityDetail;