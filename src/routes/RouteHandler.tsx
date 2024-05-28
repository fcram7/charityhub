import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import { lazy, Suspense } from 'react';

import Home from '../pages/home/Index';

const NotAuthorized = lazy(() => import('../pages/notAuthorized/Index'));
const ContactUs = lazy(() => import('../pages/contactus/Index'));
const Charities = lazy(() => import('../pages/charities/Index'));
const CharityDetail = lazy(() => import('../pages/CharityDetail/Index'));
const Login = lazy(() => import('../pages/login/Index'));
const Register = lazy(() => import('../pages/register/Index'));
const Dashboard = lazy(() => import('../pages/dashboard/Index'));
const CreateCharity = lazy(() => import('../pages/createCharity/Index'));
const EditCharity = lazy(() => import('../pages/editCharity/Index'));
const Donate = lazy(() => import('../pages/donate/Index'));

const RouteHandler = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="not-authorized" element={
          <Suspense fallback={<div className="bg-slate-200"></div>}>
            <NotAuthorized />
          </Suspense>
        }/>
        <Route index element={
          <Home />
        } />
        <Route path="charities" element={
          <Suspense fallback={<div className="bg-slate-200"></div>}>
            <Charities />
          </Suspense>
        } />
        <Route path="contact-us" element={
          <Suspense fallback={<div className="bg-slate-200"></div>}>
            <ContactUs />
          </Suspense>
        }/>
        <Route path="register" element={
          <Suspense fallback={<div className="bg-slate-200"></div>}>
            <Register />
          </Suspense>
        }/>
        <Route path="login" element={
          <Suspense fallback={<div className="bg-slate-200"></div>}>
            <Login />
          </Suspense>
        }/>

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
          <Route path="dashboard" element={
            <Suspense fallback={<div>Loading</div>}>
              <Dashboard />
            </Suspense>
          }/>
          <Route path="create-charity" element={
            <Suspense fallback={<div>Loading</div>}>
              <CreateCharity />
            </Suspense>
          }/>
          <Route path=":charityId/edit-charity" element={
            <Suspense fallback={<div>Loading</div>}>
              <EditCharity />
            </Suspense>
          }/>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
 
export default RouteHandler;