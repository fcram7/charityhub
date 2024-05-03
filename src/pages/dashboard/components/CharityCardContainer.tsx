import { ReactNode } from 'react';

interface charityCardContainer {
  children: ReactNode
}

const CharityCardContainer = ({ children }: charityCardContainer) => {
  return ( 
    <div className="charity-card-container py-8 px-4 grid gap-4 border border-neutral-400 rounded-md">
      { children }
    </div>
  );
}

export default CharityCardContainer;