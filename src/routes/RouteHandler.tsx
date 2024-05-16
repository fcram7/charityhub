import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../pages/home/Index'));
const Login = lazy(() => import('../pages/login/Index'));
const ContactUs = lazy(() => import('../pages/contactus/Index'));
const Register = lazy(() => import('../pages/register/Index'));
const Dashboard = lazy(() => import('../pages/dashboard/Index'));
const NotAuthorized = lazy(() => import('../pages/notAuthorized/Index'));
const CreateCharity = lazy(() => import('../pages/createCharity/Index'));
const EditCharity = lazy(() => import('../pages/editCharity/Index'));

const RouteHandler = () => {

  return ( 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/not-authorized" element={<NotAuthorized />}/>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:email/dashboard" element={<Dashboard />}/>
        <Route path="/:email/create-charity" element={<CreateCharity />}/>
        <Route path="/:email/:charityId/edit-charity" element={<EditCharity />}/>
      </Routes>
    </Suspense>
   );
}
 
export default RouteHandler;