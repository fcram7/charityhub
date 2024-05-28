import Hero from './Hero';
import AboutCharityhub from './AboutCharityhub';
import CreateDonateCollaborate from './CreateDonateCollaborate';
import PreLoadingOverlay from '../../components/PreLoadingOverlay';

import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';


const Charities = lazy(() => import('./Charities'));
const StartCharity = lazy(() => import('./StartCharity'));


const Home = () => {
  return ( 
    <>
      <Helmet>
        <title>Home | charityhub.</title>
        <meta name="charityhub. Home" content="charityhub. Home Page"/>
        <link rel="canonical" href="/"/>
      </Helmet>
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