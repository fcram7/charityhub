import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import Home from '../pages/home/Index';
// import Login from '../pages/login/Index';
// import ContactUs from '../pages/contactus/Index';
// import Register from '../pages/register/Index';
// import Dashboard from '../pages/dashboard/Index';
// import NotAuthorized from '../pages/notAuthorized/Index';
// import CreateCharity from '../pages/createCharity/Index';
// import EditCharity from '../pages/editCharity/Index';

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
    // <Routes>
    //   <Route path="/not-authorized" element={<NotAuthorized />}/>
    //   <Route index element={<Home />} />
    //   <Route path="/contact-us" element={<ContactUs />}/>
    //   <Route path="/register" element={<Register />}/>
    //   <Route path="/login" element={<Login />}/>
    //   <Route path="/:email/dashboard" element={<Dashboard />}/>
    //   <Route path="/:email/create-charity" element={<CreateCharity />}/>
    //   <Route path="/:email/:charityId/edit-charity" element={<EditCharity />}/>
    // </Routes>
   );
}
 
export default RouteHandler;