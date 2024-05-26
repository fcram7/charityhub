import Charities from './Charities';
import StartCharity from './StartCharity';
import Hero from './Hero';
import AboutCharityhub from './AboutCharityhub';
import CreateDonateCollaborate from './CreateDonateCollaborate';
import PreLoadingOverlay from '../../components/PreLoadingOverlay';

const Home = () => {
  return ( 
    <>
      <PreLoadingOverlay overlayText="charityhub."/>
      <Hero />
      <AboutCharityhub />
      <CreateDonateCollaborate />
      <Charities />
      <StartCharity />
    </>
   );
}
 
export default Home;