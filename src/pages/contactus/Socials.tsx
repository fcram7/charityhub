import { FaInstagram, FaYoutube } from "react-icons/fa6";
import SocialsIcon from './components/SocialsIcon';

const Socials = () => {
  return ( 
    <section className="socials-section px-[5%] lg:px-[2%] py-36 bg-slate-200">
      <h1 className="section-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">Socials</h1>
      <h3 className="section-subtitle text-center mt-3 font-instrument text-4xl sm:text-5xl leading-normal sm:leading-relaxed lg:leading-normal lg:text-6xl lg:px-[12rem]">GIVE US A FOLLOW</h3>
      <div className="socials-content mt-4 lg:mt-8 flex justify-center items-center gap-6 lg:gap-8">
        <SocialsIcon icon={<FaYoutube />} styles="socials text-7xl lg:text-8xl text-red-600" />
        <SocialsIcon icon={<FaInstagram />} styles="socials text-6xl lg:text-7xl text-slate-50 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
      </div>
    </section>
   );
}
 
export default Socials;