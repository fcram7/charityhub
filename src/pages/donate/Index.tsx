import DonateForm from './DonateForm';

import { Helmet } from 'react-helmet-async';

const Donate = () => {
  return ( 
    <>
      <Helmet>
        <title>Donate | charityhub.</title>
        <meta name="charityhub. Donate" content="charityhub. Donate Page"/>
        <link rel="canonical" href="/donate/:charityId"/>
      </Helmet>
      <DonateForm />
    </>
   );
}
 
export default Donate;