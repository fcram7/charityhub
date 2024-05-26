import PageSection from '../../components/PageSection';

import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const Hero = () => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.charities', {
        y: 200,
        opacity: 0,
      }, {
        delay: 2.3,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.out'
      });
    });
    
    gsap.fromTo('.charities-section-subtitle', {
      y: 100,
      opacity: 0
    }, {
      delay: 3.1,
      y: 0,
      opacity: 1,
    });

    return () => context.revert();
  }, [])
  return ( 
    <PageSection bgColor="bg-slate-200" paddingY="py-24">
      <div className="charities-section-titles flex flex-col items-center gap-4">
        <div className="charities-section-title flex justify-center">
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">C</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">h</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">a</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">r</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">i</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">t</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">i</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">e</h1>
          <h1 className="charities font-clashGrotesk font-bold text-center lg:text-[14rem]">s</h1>
        </div>
        <h3 className="charities-section-subtitle font-instrument lg:text-6xl">All charities Data</h3>
      </div>
    </PageSection>
   );
}
 
export default Hero;