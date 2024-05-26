import PreLoadingOverlay from '../../components/PreLoadingOverlay';
import CharitiesList from './CharitiesList';
import Hero from './Hero';

const Charities = () => {
  return ( 
    <>
      <PreLoadingOverlay overlayText="Charities"/>
      <Hero />
      <CharitiesList />
    </>
   );
}
 
export default Charities;