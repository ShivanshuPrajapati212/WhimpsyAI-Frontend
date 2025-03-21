import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (error) {
      console.error('Login failed');
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 items-center min-h-screen">
      <h1 className="text-3xl text-primary my-9">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:w-[40%]">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="sam@tower.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required={true}
              />
            </label>
            <button className="btn btn-primary btn-block font-semibold">
              Login
            </button>
          </form>
          <div className="flex flex-col border-opacity-50 md:w-[40%]">
      <div className="divider">OR</div>
      <a className="btn btn-primary bg-white text-black btn-block font-semibold flex justify-center items-center gap-4" href='/api/auth/google'>
      <FcGoogle className="text-3xl"/>Login with Google
            </a>
    </div>
          <a href="/signup" className="font-medium underline">
            Don't have a account?
          </a>
        </div>
  );
};

export default Login;