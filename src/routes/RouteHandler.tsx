import { Route, Routes } from 'react-router-dom';
import Cookies from "js-cookie"

import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import ContactUs from '../pages/contactus/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';
import NotAuthorized from '../pages/notAuthorized/Index';

const RouteHandler = () => {
  const cookies = Cookies.get("session");

  return ( 
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/:email/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/not-authorized" element={<NotAuthorized />}/> */}
        {cookies ? (
          <>
            <Route path="/:email/*" element={<Dashboard />}/>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />}/>
          </>
        ) : (
          <>
            <Route path="/not-authorized" element={<NotAuthorized />}/>
            <Route index path="/*" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </>
        )}
      </Routes>
    </>
   );
}
 
export default RouteHandler;