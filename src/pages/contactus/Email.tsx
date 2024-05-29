import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Email = () => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.contact', {
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

      gsap.fromTo('.email-section-subtitle', {
        y: 100,
        opacity: 0
      }, {
        delay: 3.1,
        y: 0,
        opacity: 1,
      });
    });

    return () => context.revert();
  }, []);
  return ( 
    <section className="email-contact-section px-[5%] lg:px-[2%] py-40 bg-slate-200">
      <div className="section-title flex justify-center">
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">C</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">o</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">n</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">t</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">a</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">c</h1>
        <h1 className="contact font-clashGrotesk text-7xl sm:text-9xl lg:text-[14rem] font-bold">t</h1>
      </div>
      <h3 className="email-section-subtitle text-center mt-3 font-instrument text-4xl sm:text-5xl leading-normal sm:leading-relaxed lg:leading-normal lg:text-6xl lg:px-[12rem]">Get to know <span className="font-neueMontreal text-3xl sm:text-4xl lg:text-5xl font-medium">charityhub.</span> and what we do to make changes.</h3>

      <div className="section-content mt-32 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-7">
        <h3 className="font-clashGrotesk font-bold text-center leading-normal text-4xl sm:text-5xl lg:text-6xl">Kindly slide into our email</h3>
        <p className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">charityhub@email.com</p>
      </div>
    </section>
   );
}
 
export default Email;