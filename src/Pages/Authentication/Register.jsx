import React from 'react';


function Register() {
  return (
    <div className=" bg-black flex items-center justify-center p-4">
      <div className="w-full bg-black p-8 rounded-lg max-w-2xl">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Register</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Referral Code (optional)"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          className="w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Register
        </button>

        <div className="text-center mt-6">
          <p className="text-white text-sm">
            Already have an account?{' '}
            <a href="#" className="text-green-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;