import IgMarquee from './IgMarquee';
import YtMarquee from './YtMarquee';

const SocialsMarquee = () => {
  return ( 
    <div className="socials-marquees flex flex-col gap-6 lg:gap-8">
      <YtMarquee iconColor="text-neutral-100" bgColor="bg-slate-950"/>
      <IgMarquee iconColor="text-neutral-100" bgColor="bg-slate-950"/>
    </div>
   );
}
 
export default SocialsMarquee;