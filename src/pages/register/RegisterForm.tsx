import { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuthStore } from '../../zustand/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import { Api } from '../../network/api';
import AuthFormContainer from '../../components/AuthFormContainer';

interface AxiosError extends Error {
  response?: {
    message?: string;
  };
}

const RegisterForm = () => {
  const { name, email, password, confirmPassword, setName, setEmail, setPassword, setConfirmPassword } = userAuthStore();

  const navigate = useNavigate();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(name, email, password, confirmPassword);

    if(password === confirmPassword) {
      try {
        await Api.register({ name, email, password });
        toast.success("Registered Sucessfully!");
        navigate("/login");
        setName(""),
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (err) {
        const error = err as AxiosError;
        console.error(error);
        if(error.message) {
          return toast.error(`Oops! ${error.message}`)
        }
        return toast.error(`Oops! There's an error ${error.message}`);
      }
    } else {
      return toast.error("Password doesn't match!");
    }
  }

  return ( 
    <AuthFormContainer handleSubmit={handleSubmit}>
      <h1 className="text-4xl mb-4 text-center font-clashGrotesk font-semibold">Register</h1>
      <label htmlFor="name">Name</label>
      <Input type="text" placeholder="Your Name" value={name} onChange={handleNameChange}/>
      <label htmlFor="email">Email</label>
      <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
      <label htmlFor="password">Password</label>
      <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>

      <Button type="submit" text="Register"/>

      <span>
        Already have an account? <Link className="inline-block underline text-sky-700 hover:text-sky-500 transition ease-in-out duration-300" to="/login">Login here</Link>
      </span>
    </AuthFormContainer>
   );
}
 
export default RegisterForm;