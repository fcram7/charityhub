import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';

// const Home = lazy(() => import('../pages/home/Index'));
// const Login = lazy(() => import('../pages/login/Index'));
// const ContactUs = lazy(() => import('../pages/contactus/Index'));
// const Register = lazy(() => import('../pages/register/Index'));
// const Dashboard = lazy(() => import('../pages/dashboard/Index'));
// const NotAuthorized = lazy(() => import('../pages/notAuthorized/Index'));
// const CreateCharity = lazy(() => import('../pages/createCharity/Index'));
// const EditCharity = lazy(() => import('../pages/editCharity/Index'));
import Home from '../pages/home/Index';
import NotAuthorized from '../pages/notAuthorized/Index';
import ContactUs from '../pages/contactus/Index';
import Login from '../pages/login/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';
import CreateCharity from '../pages/createCharity/Index';
import EditCharity from '../pages/editCharity/Index';

const RouteHandler = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="not-authorized" element={<NotAuthorized />}/>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
        </Route>

        <Route path="/:email/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="create-charity" element={<CreateCharity />}/>
          <Route path=":charityId/edit-charity" element={<EditCharity />}/>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
 
export default RouteHandler;