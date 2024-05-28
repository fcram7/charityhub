import Hero from './Hero';

import { Helmet } from 'react-helmet-async';

const NotAuthorized = () => {
  return ( 
    <>
      <Helmet>
        <title>401 - Not Authorized | charityhub.</title>
        <meta name="charityhub. Not Authorized" content="charityhub. Not Authorized Page"/>
        <link rel="canonical" href="/not-authorized"/>
      </Helmet>
      <Hero />
    </>
   );
}
 
export default NotAuthorized;