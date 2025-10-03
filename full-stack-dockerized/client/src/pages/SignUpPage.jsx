import React from 'react';
import { SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <>
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <SignUp
            path="/sign-up"
            routing="path"
            // Redirect to dashboard after successful sign-up
            afterSignUpUrl="/dashboard"
          />
        </div>
      </SignedOut>

      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>
    </>
  );
};

export default SignUpPage;
