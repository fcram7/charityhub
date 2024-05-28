import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import CharitiesList from './CharitiesList';
import Hero from './Hero';

import { Helmet } from 'react-helmet-async';

const Charities = () => {
  return ( 
    <>
      <Helmet>
        <title>Charities | charityhub.</title>
        <meta name="charityhub. Charities" content="charityhub. Charities Page"/>
        <link rel="canonical" href="/charities"/>
      </Helmet>
      <PreLoadingOverlay overlayText="Charities"/>
      <Hero />
      <CharitiesList />
    </>
   );
}
 
export default Charities;