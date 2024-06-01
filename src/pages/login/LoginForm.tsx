import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent } from "react";
// import Cookies from "js-cookie";
import { userAuthStore } from "../../zustand/auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Api } from "../../network/api";
import toast from "react-hot-toast";
import AuthFormContainer from "../../components/AuthFormContainer";
import { tokenStore } from '../../zustand/accessToken';

interface AxiosError extends Error {
  response?: {
    message?: string;
  };
}

const LoginForm = () => {
  const { email, password, setEmail, setPassword } = userAuthStore();
  const  { setToken } = tokenStore();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(email, password);

    try {
      const login = await Api.login({ email, password });
      // const cookies = Cookies.get("session");
      setTimeout(() => {
        // if(cookies) {
        //   navigate(`/${encodeURIComponent(email)}/dashboard`);
        //   toast.success("Logged in successfully!");
        // } else {
        //   navigate("/not-authorized");
        // }
        setToken(login.data.accessToken);
        navigate(`/${encodeURIComponent(email)}/dashboard`);
        toast.success("Logged in successfully!");
        setEmail("");
        setPassword("");
      }, 100)
    } catch (err) {
      const error = err as AxiosError;
      console.error(error);
      if (error.message) {
        return toast.error(`Oops! ${error.message}`);
      }
      return toast.error(`Oops! There is an error ${error.message}`);
    }
  };

  return (
    <AuthFormContainer handleSubmit={handleSubmit}>
      <h1 className="text-4xl mb-4 text-center font-clashGrotesk font-semibold">
        Login
      </h1>
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <Button type="submit" text="Login" />

      <span>
        Don't have an account?{" "}
        <Link
          className="inline-block underline text-sky-700 hover:text-sky-500 transition ease-in-out duration-300"
          to="/register"
        >
          Register here
        </Link>
      </span>
    </AuthFormContainer>
  );
};

export default LoginForm;
