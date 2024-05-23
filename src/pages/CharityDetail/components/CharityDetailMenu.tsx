// import { useState } from 'react';

interface charityDetailMenu {
  storyActive: boolean,
  updatesActive: boolean,
  storyActiveChangeHandler: () => void,
  updatesActiveChangeHandler: () =>void,
}

const CharityDetailMenu = ({ storyActive, updatesActive, storyActiveChangeHandler, updatesActiveChangeHandler }: charityDetailMenu) => {

  return ( 
    <div className="charity-detail-menu">
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