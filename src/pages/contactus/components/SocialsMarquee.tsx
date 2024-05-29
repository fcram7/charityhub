import IgMarquee from './IgMarquee';
import YtMarquee from './YtMarquee';

const SocialsMarquee = () => {
  return ( 
    <div className="socials-marquees flex flex-col gap-6 lg:gap-8">
      <YtMarquee iconColor="text-neutral-100" bgColor="bg-[#FF0000]"/>
      <IgMarquee iconColor="text-neutral-100" bgColor="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"/>
    </div>
   );
}
 
export default SocialsMarquee;