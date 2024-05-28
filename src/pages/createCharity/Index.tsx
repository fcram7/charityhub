import CreateCharityForm from './CreateCharityForm';

import { Helmet } from 'react-helmet-async';

const CreateCharity = () => {
  return ( 
    <>
      <Helmet>
        <title>Create Charity | charityhub.</title>
        <meta name="charityhub. Create Charity" content="charityhub. Create Charity Page"/>
        <link rel="canonical" href="/:email/create-charity"/>
      </Helmet>
      <CreateCharityForm />
    </>
   );
}
 
export default CreateCharity;