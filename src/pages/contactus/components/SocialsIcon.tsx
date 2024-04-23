import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface socialsIcon {
  icon: ReactElement,
  styles: string,
}

const SocialsIcon = ({ icon, styles }: socialsIcon) => {
  return ( 
    <motion.div 
      initial={{ y: 0 }}
      whileHover={{ y: -10 }}
      className={styles}
    >
      <a href="#">
        {icon}
      </a>
    </motion.div>
   );
}
 
export default SocialsIcon;