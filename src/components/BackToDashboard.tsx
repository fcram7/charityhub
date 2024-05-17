import { Link } from 'react-router-dom';

interface BackToDashboard {
  email: string
}

const BackToDashboard = ({ email }: BackToDashboard) => {
  return ( 
    <div className="back-to-dashboard my-6 text-xl text-violet-500">
      <Link to={`/${encodeURIComponent(email!)}/dashboard`}>&larr; Back to dashboard</Link>
    </div>
   );
}
 
export default BackToDashboard;