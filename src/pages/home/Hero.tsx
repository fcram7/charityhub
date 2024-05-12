import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useState } from 'react';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(prevHover => !prevHover);
  }

  console.log(hover)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.hero-texts', {
        x: -1000,     
      }, {
        x: 0,
        duration: 1
      });

      gsap.fromTo('.small-text', {
        y: 100,
      }, {
        y: 0,
        duration: 1,
        delay: 1
      })
    })

    return () => context.revert();
  }, []);

  useEffect(() => {
    gsap.to('.small-text', {
      opacity: hover ? 1 : 0.5,
      duration: 0.5
    })
  }, [hover])
  return ( 
    <section className="hero-section relative px-[5%] lg:px-[2%] py-48 bg-slate-200">
      <div className="section-content relative flex">
        <div className="hero-texts flex flex-col gap-6 w-full overflow-hidden">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ">Share <span onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} className="small-text text-3xl">with people</span>,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ms-24">Care <span onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} className="small-text text-3xl">for people</span>,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ms-40">For The Better <span onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} className="small-text text-3xl">of people</span>.</h1>
        </div>
      </div>
    </section>
   );
}
 
export default Hero;