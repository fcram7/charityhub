import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import ContactUs from '../pages/contactus/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';
import NotAuthorized from '../pages/notAuthorized/Index';
import CreateCharity from '../pages/createCharity/Index';

const RouteHandler = () => {

  return ( 
    <Routes>
      <Route path="/not-authorized" element={<NotAuthorized />}/>
      <Route index element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/:email/dashboard" element={<Dashboard />}/>
      <Route path="/:email/create-charity" element={<CreateCharity />}/>
    </Routes>
   );
}
 
export default RouteHandler;