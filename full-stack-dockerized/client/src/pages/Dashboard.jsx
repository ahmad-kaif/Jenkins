import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 flex flex-col items-center justify-center px-6">
      <SignedIn>
        <div className="max-w-2xl w-full bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            This is a protected space — only signed-in users can access it.  
            Start by creating your own <span className="text-blue-400 font-medium">SQL Sandbox</span>.
          </p>

          <button
            onClick={() => navigate('/sandbox')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            🚀 Create SQL Sandbox
          </button>
        </div>
      </SignedIn>

      <SignedOut>
        {/* Redirect to sign-in if not signed in */}
        <Navigate to="/sign-in" />
      </SignedOut>
    </div>
  );
};

export default Dashboard;
