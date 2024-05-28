import LoginForm from './LoginForm';

import { Helmet } from 'react-helmet-async';

const Login = () => {
  return ( 
    <>
      <Helmet>
        <title>Login | charityhub.</title>
        <meta name="charityhub. Login" content="charityhub. Login Page"/>
        <link rel="canonical" href="/login"/>
      </Helmet>
      <LoginForm />
    </>
   );
}
 
export default Login;