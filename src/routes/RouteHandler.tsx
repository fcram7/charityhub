import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';

const RouteHandler = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
   );
}
 
export default RouteHandler;