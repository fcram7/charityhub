import { useLayoutEffect } from 'react';
import PageSection from '../../components/PageSection';
import About1 from "/about-1.png";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const AboutCharityhub = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to('.about-img', {
        x: -1000,
        scrollTrigger: {
          trigger: '.page-section-content',
          start: 'bottom 85%',
          end: 'bottom 30%',
          markers: false,
          scrub: 3
        },
      });

      gsap.to('.about-text', {
        x: 1000,
        scrollTrigger: {
          trigger: '.page-section-content',
          start: 'bottom 85%',
          end: 'bottom 30%',
          markers: false,
          pin: '.page-section-content',
          pinSpacing: false,
          scrub: 3
        },
      });
    })

    return () => context.revert();
  }, [])
  
  return ( 
    <PageSection paddingY="py-0" bgColor="bg-slate-200">
      <div className="page-section-content flex flex-col lg:flex-row items-center justify-evenly overflow-hidden">
        <img src={About1} alt="About Charityhub."  className="about-img w-[80%] md:w-[60%] lg:w-[40%]"/>
        <h1 className="about-text font-instrument text-5xl w-full text-center lg:w-[40%] lg:text-start leading-relaxed"><span>charityhub, </span>A charity platform from, by, and for Career Class friends.</h1>
      </div>
    </PageSection>
   );
}
 
export default AboutCharityhub;