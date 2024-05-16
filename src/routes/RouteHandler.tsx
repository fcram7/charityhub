import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/home/Index'));
const ContactUs = lazy(() => import('../pages/contactus/Index'));
// const Login = lazy(() => import('../pages/login/Index'));
// const Register = lazy(() => import('../pages/register/Index'));
// const Dashboard = lazy(() => import('../pages/dashboard/Index'));
// const NotAuthorized = lazy(() => import('../pages/notAuthorized/Index'));
// const CreateCharity = lazy(() => import('../pages/createCharity/Index'));
// const EditCharity = lazy(() => import('../pages/editCharity/Index'));
import NotAuthorized from '../pages/notAuthorized/Index';
import Login from '../pages/login/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';
import CreateCharity from '../pages/createCharity/Index';
import EditCharity from '../pages/editCharity/Index';

const RouteHandler = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="not-authorized" element={<NotAuthorized />}/>
        <Route index element={
          <Suspense fallback={<div>Loading</div>}>
            <Home />
          </Suspense>
        } />
        <Route path="contact-us" element={
          <Suspense fallback={<div>Loading</div>}>
            <ContactUs />
          </Suspense>
        }/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>

        <Route path=":email/">
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="create-charity" element={<CreateCharity />}/>
          <Route path=":charityId/edit-charity" element={<EditCharity />}/>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
 
export default RouteHandler;