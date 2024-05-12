import PageSection from '../../components/PageSection';
import Charity1 from "/charity-1.jpg";
import Charity2 from "/charity-2.jpg";
import Charity3 from "/charity-3.jpg";
import Charity4 from "/charity-4.jpg";

import { useState } from 'react';

const Documentations = () => {
  const images = [
    {
      image: Charity1
    },

    {
      image: Charity2
    },

    {
      image: Charity3
    },

    {
      image: Charity4
    },
  ]
  const [hover, setHover] = useState(false);

  const mouseHoverHandler = () => {
    setHover(hover => !hover)
  }
  
  return ( 
    <PageSection paddingY="py-52" bgColor="bg-slate-100">
      <h1 className="section-title text-center font-instrument text-4xl md:text-6xl lg:text-7xl mb-12">Nothing goes to waste</h1>
      <div className="documentations-content md:px-[5%] lg:px-[15%] grid grid-cols-1 justify-center md:grid-cols-2 gap-4">
        { images.map((image, index) => (
          <img key={index} src={image.image} alt="Charity Documentation" className={`img border rounded-2xl ease-in-out duration-200 ${hover ? "grayscale-0" : "grayscale"}`} onMouseEnter={mouseHoverHandler} onMouseLeave={mouseHoverHandler}/>
        ))}
      </div>
    </PageSection>
   );
}
 
export default Documentations;