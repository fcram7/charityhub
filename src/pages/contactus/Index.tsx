import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import Email from './Email';
import Socials from './Socials';

import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  return ( 
    <>
      <Helmet>
        <title>Contact Us | charityhub.</title>
        <meta name="charityhub. Contact Us" content="charityhub. Contact Us Page"/>
        <link rel="canonical" href="/contact-us"/>
      </Helmet>
      <PreLoadingOverlay overlayText="Contact Us"/>
      <Email />
      <Socials />
    </>
   );
}
 
export default ContactUs;