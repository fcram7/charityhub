import { useNavigate } from 'react-router-dom';

const StartCharity = () => {
  const navigate = useNavigate();

  const startCharityButtonHandler = () => {
    navigate("/login");
  }
  return ( 
    <section className="start-charity py-20 lg:py-36 px-[5%] lg:px-[2%] bg-violet-500">
      <h1 className="section-title font-instrument text-center text-2xl md:text-3xl lg:text-7xl lg:leading-relaxed">
        "The best way to find yourself is to lose yourself in the service of others"
      </h1>
      <div className="start-charity-content flex justify-center">
        <button onClick={startCharityButtonHandler} type="button" className="px-3 py-2 bg-violet-600 rounded-md border text-neutral-50 transition-all ease-in-out duration-200 text-lg mt-4 hover:border-violet-600 hover:text-violet-600 hover:bg-slate-100">Start your charity campaign</button>
      </div>
    </section>
   );
}
 
export default StartCharity;