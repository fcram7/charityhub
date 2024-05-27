import PageSection from '../../components/PageSection';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useLayoutEffect } from 'react';

const CreateDonateCollaborate = () => {
  const textRef = useRef([]);
  textRef.current = [];
  gsap.registerPlugin(ScrollTrigger)

  const addToRefs = (text: never) => {
    if(text && !textRef.current.includes(text)) {
      textRef.current.push(text)
    }
  } 

  useLayoutEffect(() => {
    const text = textRef.current;

    const context = gsap.context(() => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 100,
        delay: 5,
      }, {
        scrollTrigger: {
          trigger: '.text',
          start: 'top 50%',
          end: 'bottom 1%',
          markers: false,
          pin: '.texts',
          pinSpacing: true,
          scrub: 4
        },
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.5,
        }
      });
    });

    return ()=> context.revert();
  }, [])
  
  return ( 
    <PageSection paddingY="py-40" bgColor="bg-slate-200">
      <div className="section-content">
        <div className="texts font-instrument flex justify-center gap-3 text-4xl md:text-6xl lg:text-8xl">
          <h1 ref={addToRefs} className="text">Create,</h1>
          <h1 ref={addToRefs} className="text">Donate,</h1>
          <h1 ref={addToRefs} className="text">Collaborate</h1>
        </div>
      </div>
    </PageSection>
   );
}
 
export default CreateDonateCollaborate;