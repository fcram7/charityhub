import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import ContactUs from '../pages/contactus/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';

const RouteHandler = () => {
  const cookies = Cookies.get("session");
  return ( 
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        { cookies ? 
          (
            <Route path="/:email/dashboard" element={<Dashboard />}/>
          ) : null
        }
      </Routes>
    </>
   );
}
 
export default RouteHandler;