import RegisterForm from './RegisterForm';

import { Helmet } from 'react-helmet-async';

const Register = () => {
  return ( 
    <>
      <Helmet>
        <title>Register | charityhub.</title>
        <meta name="charityhub. Register" content="charityhub. Register Page"/>
        <link rel="canonical" href="/register"/>
      </Helmet>
      <RegisterForm />
    </>
   );
}
 
export default Register;