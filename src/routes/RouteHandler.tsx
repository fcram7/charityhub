import { Navigate, Route, Routes } from 'react-router-dom';
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
    <Routes>
      <Route path="/not-authorized" element={<NotAuthorized />}/>
      <Route index element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/:email/dashboard" element={cookies ? <Dashboard /> : <Navigate to="/not-authorized"/>}/>
    </Routes>
  );
}

export default RouteHandler;