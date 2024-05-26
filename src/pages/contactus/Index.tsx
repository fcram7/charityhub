import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import Email from './Email';
import Socials from './Socials';

const ContactUs = () => {
  return ( 
    <>
      <PreLoadingOverlay overlayText="Contact Us"/>
      <Email />
      <Socials />
    </>
   );
}
 
export default ContactUs;