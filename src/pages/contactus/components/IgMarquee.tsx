import { FaInstagram } from 'react-icons/fa6';
import SocialsIcon from './SocialsIcon';

interface marqueeInterface {
  iconColor: string,
  bgColor: string
}

const IgMarquee = ({ iconColor, bgColor }: marqueeInterface) => {
  return ( 
    <div className={`instagram marquee flex gap-[5.2rem] py-3 px-3 w-full ${bgColor}`}>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
      <div className="ig-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaInstagram />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Instagram</h3>
      </div>
    </div>
   );
}
 
export default IgMarquee;