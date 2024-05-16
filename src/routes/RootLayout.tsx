import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return ( 
    <>
      <Navbar />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </>
   );
}
 
export default RootLayout;