import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return ( 
    <footer className="footer-section px-[5%] pt-20 lg:pt-10 pb-6 bg-yellow-300 border-t-4 border-neutral-950">
      <div className="footer-content lg:flex lg:justify-between lg:border-t lg:border-neutral-950">
        <div className="socials mb-6 flex gap-6 text-3xl lg:mt-3">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <div className="copyright pt-2 border-t lg:border-none border-neutral-950">
          <p className="text-xl">charityhub. - 2024</p>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;