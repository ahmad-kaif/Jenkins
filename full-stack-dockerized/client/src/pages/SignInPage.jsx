import React from 'react';
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const SignInPage = () => {
  return (
    <>
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <SignIn
            path="/sign-in"
            routing="path"
            afterSignInUrl="/dashboard"
          />
        </div>
      </SignedOut>

      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>
    </>
  );
};

export default SignInPage;
