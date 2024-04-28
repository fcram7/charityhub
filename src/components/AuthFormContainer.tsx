import { FormEvent, ReactNode } from 'react';

interface formChildren {
  children: ReactNode
  handleSubmit: (e: FormEvent) => void,
}

const AuthFormContainer = ({ children, handleSubmit }: formChildren) => {
  return ( 
    <section className="auth-form-section bg-gradient-to-b from-slate-200 from-70% to-yellow-300 py-40 lg:py-32 px-[5%] lg:px-[2%] h-full flex lg:justify-center">
      <div className="auth-form-content h-full w-full flex flex-col items-center justify-center gap-4 lg:max-w-[50rem]">
        <form onSubmit={handleSubmit} className="form flex flex-col gap-4 w-full bg-slate-200 border px-6 lg:px-24 py-6 lg:py-16 rounded-2xl border-neutral-400 shadow-2xl">
          {children}
        </form>
      </div>
    </section>
   );
}
 
export default AuthFormContainer;