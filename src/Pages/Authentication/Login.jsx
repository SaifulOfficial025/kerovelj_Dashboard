import React from 'react';

function Login() {
  return (
    <div className=" bg-black flex items-center justify-center p-4 mt-20">
      <div className="w-full bg-black p-8 rounded-lg max-w-2xl">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Login</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          className="w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Login
        </button>

        <div className="text-center mt-6">
          <p className="text-white text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-green-500 hover:underline">
              Sign up
            </a>
          </p>
          <a href="#" className="text-green-500 hover:underline text-sm mt-2 block">
            Forgot password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;