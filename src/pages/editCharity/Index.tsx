import EditCharityForm from './EditCharityForm';

import { Helmet } from 'react-helmet-async';

const EditCharity = () => {
  return ( 
    <>
      <Helmet>
        <title>Edit Charity | charityhub.</title>
        <meta name="charityhub. Edit Charity" content="charityhub. Edit Charity Page"/>
        <link rel="canonical" href="/:email/:charityId/edit-charity"/>
      </Helmet>
      <EditCharityForm />
    </>
   );
}
 
export default EditCharity;