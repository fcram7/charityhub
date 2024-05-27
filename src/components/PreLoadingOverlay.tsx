import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { preLoadOverlayStore } from '../zustand/preloadOverlayAnimation';

interface preLoadingOverlay {
  overlayText: string
}

const PreLoadingOverlay = ({ overlayText }: preLoadingOverlay) => {
  const { websiteOpen, headerMenuClicked, setHeaderMenuClicked, setWebsiteOpen } = preLoadOverlayStore();
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if(websiteOpen) {
        gsap.set('.overlay', {
          height: '100vh'
        })
        setWebsiteOpen(false)
      }
      gsap.fromTo('.overlay-text', {
        opacity: 0,
      }, {
        duration: 2.3,
        opacity: 1,
        onComplete: () => {
          gsap.to('.overlay-text', {
            opacity: 0,
            display: 'none'
          })
        }
      });

      const overlayTextGone = gsap.to('.overlay-text', {
        opacity: 0,
        display: "none"
      }).pause();

      if(!headerMenuClicked) {
        overlayTextGone.resume();
      }

      gsap.to('.bar', {
        duration: 1.5,
        delay: 1.5,
        height: 0,
        stagger: {
          amount: 0.5
        },
        ease: 'power4.inOut',
        onComplete: () => {
          
          setHeaderMenuClicked(false);
        }
      });


      const reverseBar = gsap.fromTo('.bar', {
        height: 0,
      }, {
        duration: 0.7,
        height: '100%',
        stagger: {
          amount: 0.3
        },
        ease: 'power4.inOut',
      }).pause();

      if(headerMenuClicked && !websiteOpen) {
        reverseBar.play();
      }

      const overlayContainer = gsap.to('.overlay', {
        display: "none",
        delay: 0.1
      }).pause();

      if(!headerMenuClicked) {
        overlayContainer.resume();
      }
    });

    return () => context.revert();
  }, [headerMenuClicked, websiteOpen, setHeaderMenuClicked, setWebsiteOpen])

  console.log(websiteOpen)
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