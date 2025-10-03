import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <SignedIn>
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard!</h1>
        <p>This is a protected page. Only signed-in users can see this.</p>
        <UserButton />
      </SignedIn>

      <SignedOut>
        {/* Redirect to sign-in if not signed in */}
        <Navigate to="/sign-in" />
      </SignedOut>
    </div>
  );
};

export default Dashboard;
