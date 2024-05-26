import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

interface preLoadingOverlay {
  overlayText: string
}

const PreLoadingOverlay = ({ overlayText }: preLoadingOverlay) => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.overlay-text', {
        opacity: 0,
      }, {
        duration: 2,
        opacity: 1,
      });

      gsap.to('.overlay-text', {
        delay: 1.9,
        duration: 0.1,
        opacity: 0,
        display: "none"
      });

      gsap.to('.bar', {
        duration: 1.5,
        delay: 1,
        height: 0,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.inOut'
      });

      gsap.to('.overlay', {
        display: "none",
        delay: 2.4
      })
    });

    return () => context.revert();
  }, [])
  return ( 
    <>
      <h1 className="overlay-text fixed top-0 w-full h-full z-[100] font-boska lg:text-6xl text-neutral-50 flex items-center justify-center">{overlayText}</h1>

      <div className="overlay fixed top-0 w-[100vw] h-[100vh] z-[99] flex">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
   );
}
 
export default PreLoadingOverlay;