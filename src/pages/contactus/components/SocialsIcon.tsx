import { ReactElement } from 'react';

interface socialsIcon {
  icon: ReactElement,
  styles: string,
}

const SocialsIcon = ({ icon, styles }: socialsIcon) => {
  return ( 
    <div className={styles}>
      <a href="#">
        {icon}
      </a>
    </div>
   );
}
 
export default SocialsIcon;