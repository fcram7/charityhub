import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

interface charityDetailMenu {
  storyActive: boolean,
  updatesActive: boolean,
  storyActiveChangeHandler: () => void,
  updatesActiveChangeHandler: () =>void,
}

const CharityDetailMenu = ({ storyActive, updatesActive, storyActiveChangeHandler, updatesActiveChangeHandler }: charityDetailMenu) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to('.charity-updates-card', {
        scrollTrigger: {
          trigger: '.charity-story',
          start: 'top 0%',
          end: 'bottom 60%',
          markers: false,
          pin: '.charity-detail-menu',
          pinSpacing: false
        },
      })
    });

    return () => context.revert();
  }, []);

  return ( 
    <div className="charity-detail-menu pt-2">
      <ul className="charity-detail-menu-lists flex gap-4">
        <li onClick={storyActiveChangeHandler} className={`menu-item px-4 py-2 ${storyActive ? "border-b-2 border-violet-500" : ""} font-redhatdisplay text-lg font-semibold cursor-pointer`}>
          Story
        </li>
        <li onClick={updatesActiveChangeHandler} className={`menu-item px-4 py-2 ${updatesActive ? "border-b-2 border-violet-500" : ""} font-redhatdisplay text-lg font-semibold cursor-pointer`}>
          Updates
        </li>
      </ul>
    </div>
   );
}
 
export default CharityDetailMenu;