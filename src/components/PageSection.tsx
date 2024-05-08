import { ReactNode } from 'react';

interface pageSectionInterface {
  children: ReactNode,
  paddingY: string,
  bgColor: string
}

const PageSection = ({ children, paddingY, bgColor }: pageSectionInterface) => {
  return ( 
    <section className={`page-section px-[5%] lg:px-[2%] ${paddingY} ${bgColor}`}>
      {children}
    </section>
   );
}
 
export default PageSection;