// import Charities from './Charities';
// import StartCharity from './StartCharity';
import Hero from './Hero';
// import AboutCharityhub from './AboutCharityhub';
// import CreateDonateCollaborate from './CreateDonateCollaborate';
import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import { Suspense, lazy } from 'react';

const AboutCharityhub = lazy(() => import('./AboutCharityhub'));
const CreateDonateCollaborate = lazy(() => import('./CreateDonateCollaborate'));
 const Charities = lazy(() => import('./Charities'));
 const StartCharity = lazy(() => import('./StartCharity'));


const Home = () => {
  return ( 
    <>
      <PreLoadingOverlay overlayText="charityhub."/>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutCharityhub />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateDonateCollaborate />
      </Suspense>
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