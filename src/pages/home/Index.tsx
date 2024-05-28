// import Charities from './Charities';
// import StartCharity from './StartCharity';
import Hero from './Hero';
import AboutCharityhub from './AboutCharityhub';
import CreateDonateCollaborate from './CreateDonateCollaborate';
import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import { Suspense, lazy } from 'react';

const Charities = lazy(() => import('./Charities'));
const StartCharity = lazy(() => import('./StartCharity'));


const Home = () => {
  return ( 
    <>
      <PreLoadingOverlay overlayText="charityhub."/>
      <Hero />
      <AboutCharityhub />
      <CreateDonateCollaborate />
      <Suspense fallback={<div>Loading...</div>}>
        <Charities />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <StartCharity />
      </Suspense>
    </>
   );
}
 
export default Home;