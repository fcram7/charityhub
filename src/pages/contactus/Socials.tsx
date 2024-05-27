import SocialsMarquee from './components/SocialsMarquee';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap';

const Socials = () => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.socials-title', {
        y: 200,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: '.socials-section-title',
          start: 'top 85%',
          end: 'bottom 25%',
          markers: false,
          scrub: 1
        },
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.out'
      });

      gsap.fromTo('.socials-section-subtitle', {
        y: 150,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: '.socials-section-title',
          start: 'bottom 85%',
          end: 'bottom 75%',
          markers: false,
          scrub: 1
        },
        y: 0,
        opacity: 1,
        duration: 1,
      })

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
      <div className="socials-section-title flex justify-center">
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">S</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">o</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">c</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">i</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">a</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">l</h1>
        <h1 className="socials-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">s</h1>
      </div>
      <h3 className="socials-section-subtitle text-center mt-3 font-instrument text-4xl sm:text-5xl leading-normal sm:leading-relaxed lg:leading-normal lg:text-6xl lg:px-[12rem]">GIVE US A FOLLOW</h3>
      <div className="socials-content mt-4 lg:mt-8 flex items-center justify-center gap-6 lg:gap-8">
        <SocialsMarquee />
      </div>
    </section>
   );
}
 
export default Socials;