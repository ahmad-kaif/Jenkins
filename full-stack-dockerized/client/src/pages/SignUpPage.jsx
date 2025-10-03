import React from 'react';
import { SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-6">
      <SignedOut>
        <div className="w-full max-w-md text-center">
          {/* <h1 className="text-3xl font-bold mb-6">Create Your Account</h1> */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <SignUp
              path="/sign-up"
              routing="path"
              afterSignUpUrl="/dashboard"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium",
                  card: "bg-gray-800 text-gray-100 border border-gray-700",
                },
              }}
            />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>
    </div>
  );
};

export default SignUpPage;
