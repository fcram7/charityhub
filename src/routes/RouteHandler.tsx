import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/home/Index'));
const ContactUs = lazy(() => import('../pages/contactus/Index'));
const Charities = lazy(() => import('../pages/charities/Index'));
const CharityDetail = lazy(() => import('../pages/CharityDetail/Index'));

import NotAuthorized from '../pages/notAuthorized/Index';
import Login from '../pages/login/Index';
import Register from '../pages/register/Index';
import Dashboard from '../pages/dashboard/Index';
import CreateCharity from '../pages/createCharity/Index';
import EditCharity from '../pages/editCharity/Index';
import Donate from '../pages/donate/Index';

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
        <Route path="charities" element={
          <Suspense fallback={<div>Loading</div>}>
            <Charities />
          </Suspense>
        } />
        <Route path="contact-us" element={
          <Suspense fallback={<div>Loading</div>}>
            <ContactUs />
          </Suspense>
        }/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>

        <Route path="charity/">
          <Route path=":charityId" element={
            <Suspense fallback={<div>Loading</div>}>
              <CharityDetail />
            </Suspense>
          }/>
        </Route>

        <Route path="donate/">
          <Route path=":charityId" element={
            <Suspense fallback={<div>Loading</div>}>
              <Donate />
            </Suspense>
          }/>
        </Route>

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