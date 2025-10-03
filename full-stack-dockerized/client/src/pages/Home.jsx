import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Welcome to <span className="text-blue-500">MySQL Sandbox</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Spin up secure, isolated MySQL sandboxes instantly.  
          Learn, experiment, and build with complete freedom — no setup required.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/sign-in')}
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg shadow-md transition"
        >
          🚀 Launch New Sandbox
        </button>
      </div>
    </div>
  );
};

export default Home;
