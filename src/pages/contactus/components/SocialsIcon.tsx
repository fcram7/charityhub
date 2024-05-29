import { ReactElement } from 'react';

interface socialsIcon {
  icon: ReactElement,
  styles: string,
}

const SocialsIcon = ({ icon, styles }: socialsIcon) => {
  return ( 
    <div className={styles}>
      <div>
        {icon}
      </div>
    </div>
   );
}
 
export default SocialsIcon;