import { ReactNode, FormEvent } from 'react';

interface charityFormInterface {
  children: ReactNode,
  title: string,
  handleSubmit: (e: FormEvent) => void,
}

const CharityFormContainer = ({ children, title, handleSubmit }: charityFormInterface) => {
  return ( 
    <section className="charity-form-section px-[5%] lg:px-[2%] py-28 lg:py-16 bg-slate-100">
      <h1 className="section-title text-3xl font-redhatdisplay font-bold">{title}</h1>
      <div className="charity-form-content mt-8 w-full">
        <form onSubmit={handleSubmit} className="form">
          {children}
        </form>
      </div>
    </section>
   );
}
 
export default CharityFormContainer;