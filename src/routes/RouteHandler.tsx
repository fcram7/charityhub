import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import ContactUs from '../pages/contactus/Index';

const RouteHandler = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
   );
}
 
export default RouteHandler;