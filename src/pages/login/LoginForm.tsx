import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { userAuthStore } from '../../zustand/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginForm = () => {
  const { email, password, setCredentials } = userAuthStore();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials(e.currentTarget.value, password);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials(email, e.currentTarget.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }
  
  return ( 
    <section className="login-section bg-gradient-to-b from-slate-200 from-70% to-yellow-300 py-40 lg:py-32 px-[5%] lg:px-[2%] h-full flex lg:justify-center">
      <div className="login-content h-full w-full flex flex-col items-center justify-center gap-4 lg:max-w-[50rem]">
        <form onSubmit={handleSubmit} className="form flex flex-col gap-4 w-full bg-slate-200 border px-6 py-6 rounded-2xl border-neutral-400 shadow-2xl">
          <h1 className="text-4xl mb-4 text-center font-clashGrotesk font-semibold">Login</h1>
          <label htmlFor="email">Email</label>
          <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
          <label htmlFor="password">Password</label>
          <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>

          <Button type="submit" text="Login"/>

          <span>
            Don't have an account? <Link className="inline-block underline text-sky-700 hover:text-sky-500 transition ease-in-out duration-300" to="/register">Register here</Link>
          </span>
        </form>
      </div>
    </section>
   );
}
 
export default LoginForm;