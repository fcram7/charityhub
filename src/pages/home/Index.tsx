import Charities from './Charities';
import StartCharity from './StartCharity';
import Hero from './Hero';
import AboutCharityhub from './AboutCharityhub';
import CreateDonateCollaborate from './CreateDonateCollaborate';

const Home = () => {
  return ( 
    <>
      <Hero />
      <AboutCharityhub />
      <CreateDonateCollaborate />
      <Charities />
      <StartCharity />
    </>
   );
}
 
export default Home;