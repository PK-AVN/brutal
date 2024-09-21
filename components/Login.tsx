"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-md max-w-sm mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Login to Your Account
      </h2>

      <form className="space-y-6">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or sign in with</span>
        </div>
      </div>

      {/* Google Sign In Button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100"
          onClick={handleGoogleSignIn}
        >
          Sign const first = useRef(second) with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
