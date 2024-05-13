import SocialsMarquee from './components/SocialsMarquee';

import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Socials = () => {

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to('.yt-marquee-inner', {
        xPercent: -127.7,
        repeat: -1,
        duration: 5,
        ease: 'linear',
      }).totalProgress(0.5);

      gsap.to('.ig-marquee-inner', {
        xPercent: 124,
        repeat: -1,
        duration: 5,
        ease: 'linear',
      }).totalProgress(0.5);
    });

    return () => context.revert();
  }, [])
  
  return ( 
    <section className="socials-section py-36 bg-slate-200 overflow-hidden">
      <h1 className="section-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">Socials</h1>
      <h3 className="section-subtitle text-center mt-3 font-instrument text-4xl sm:text-5xl leading-normal sm:leading-relaxed lg:leading-normal lg:text-6xl lg:px-[12rem]">GIVE US A FOLLOW</h3>
      <div className="socials-content mt-4 lg:mt-8 flex items-center justify-center gap-6 lg:gap-8">
        <SocialsMarquee />
      </div>
    </section>
   );
}
 
export default Socials;