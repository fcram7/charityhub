import { FaYoutube } from 'react-icons/fa6';
import SocialsIcon from './SocialsIcon';

interface marqueeInterface {
  iconColor: string,
  bgColor: string
}

const YtMarquee = ({ iconColor, bgColor }: marqueeInterface) => {
  return ( 
    <div className={`youtube marquee flex gap-[5.2rem] ${bgColor} py-3 px-3 w-full transition-all ease-in-out duration-200 cursor-pointer`}>
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
      <div className="yt-marquee-inner flex items-center gap-2">
        <SocialsIcon icon={<FaYoutube />} styles={`socials text-7xl lg:text-8xl ${iconColor}`} />
        <h3 className="text-6xl font-boska text-neutral-100">Youtube</h3>
      </div>
      
    </div>
   );
}
 
export default YtMarquee;